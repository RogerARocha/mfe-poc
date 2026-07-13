# Monorepos

A monorepo is a single repository containing multiple distinct projects, with defined relationships. A repository with several projects that don't follow this rule, it's just a monolitch

## Monorepo != Monolith

All code in one place is just "code colocation." If a repository houses a massive, entangled application without distinct boundaries and encapsulated parts, it is not a monorepo—it is a monolith. A monorepo is the exact opposite of a monolith. It combines single-repository colocation with strict modularity, enforcing well-defined relationships and clear architectural boundaries between discrete projects.

### Polyrepo

Each team or application lives in its own repository, with its own dependencies, tooling, build artifact, and CI pipeline. Organizations often adopt polyrepos to grant teams greater autonomy. But, a significant cost of this autonomy is isolation. This isolation can delay integrations and requires great coordination when handling breaking changes.

## AI Boost

The repo boundaries difficult devs and AIs to see the whole especially AI agents, who cannot see the context unless it's said, documented or viewed. So with the sctructure of monorepos it hasn't to rely on specs and docs rather than the actual implementation.

## npm-Workspaces

Set of features that supports managing multiple packages from a root package. Better workflow when handling linked packages. Automates linking process from `npm install`, removes the manually use of `npm link`

>Quick note npm links: Used to create symlinks, symbolic links functionality that is used to work with local packages to test them without need of rebuild and publish the original. Workspaces it´s a direct update for npm links

We can automate the required steps to define a new workspace using npm init. For example in a project that already has a package.json defined you can run: `npm init -w ./packages/`
This command will create the missing folders and a new package.json file (if needed) while also making sure to properly configure the "workspaces" property of your root project package.json

We can add dependencies with the -w parameter, this applies to add workspaces as dependend of each other

With this configuration we can run scripts in nested workspaces without need of changing between them
E.g.: `npm run test -w test1` to run test in specically test1, `npm run test -w test1 -w test2` to run in both test1 and test2. We can run all workspaces with `npm run test --workspaces`. If not all workspaces has the command test for example we can add a flag `--if-present` to run just the ones that have this script.

### Commands to remember

Initialization of a workspace
`npm init -w <path-to-workspace>`

At the contexto of workspaces when executed at the root installs all dependencies and creates the symlinks between the packages
`npm install`

Installs a dependency exclusively at the a workspace
`npm install <lib-name> -w <workspace-name>`

Creates a dependency between workspaces
`npm install <workspace-b> -w <workspace-a>`

Runs a script at a specify workspace
`npm run <script> -w <workspace-name>`

Runs a script in all workspaces that has that script
`npm run <script> --workspaces --if-present`

## Lerna

Lerna is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository.

It solves two of the biggest problems of JavaScript/TypeScript monorepos:

- Lerna runs a command against any number of projects, and it does it in the most efficient way, in the right order, and with the possibility to distribute that on multiple machines.
- Lerna manages your publishing process, from version management to publishing to NPM, and it provides a variety of options to make sure any workflow can be accommodated.

### Initializing with Lerna

`npx lerna init --dryRun` (dryRun adds a preview before to see what is the changes. Helps to prevents unwanted configs)

After see how its gonna be the changes

`npx lerna init` to start.
`npx lerna init --indenpendent`(versioning style, can check more further)

`npm run install` to get lerna dependency

Lerna starts the workspace definitions at init, but the management is made by the workspace manager itself (npm-Workspaces, hoisting depreciated)

`npx lerna create <package-name>` to create the packages

When linking packages, note that after running the native `npm install` it's enought the lerna does'nt get envoled at the management as mentioned above. Otherwise we can customize the packages pattern but mainly it's not used.

### Run Tasks

Monorepos can have hundreds of projects, so being able to run npm scripts against all (or some) of them is a key feature.

- **Everything**

`npx lerna run <target>`
Can run tests, build, etc.

- **Multiple tasks concurrently**

`npx lerna run test,build,lint`
We can pass more than one tasks to run separed by commas.

- **Single task**

`npx lerna run test --scope=<name>`
Obviusly are rare the cases that it's need to run everything so we can ran specically the project I working on

- **By PR**

`npx lerna run test --since=origin/main`
Run testes based on the branch affected

#### Caching

It's costly to rebuild and retest the same code over and over again. Lerna uses a computation cache to never rebuild the same code twice.

>If you don't have nx.json, run `npx lerna add-caching`.

To enable caching at build and testing we can edit nx.json to have this feature

```(json)
{
  "targetDefaults": {
    "build": {
      "cache": true
    },
    "test": {
      "cache": true
    }
  }
}
```

By default, Lerna (via Nx) uses a local computation cache. Nx stores the cached values only for a week, after which they are deleted. To clear the cache run `nx reset`, and Nx will create a new one the next time it tries to access it.

### Version and Publish

Lerna can increment your package's versions as well as publish your packages to NPM, and it provides a variety of options to make sure any workflow can be accommodated.

`lerna version --no-private` (use no private tag to packages marked as private are excluded)

This will make lerna identifies the currente version and propose the next one, once a version is given, lerna updates the package.json, commits the change and adds a tag.

`lerna publish --no-private`

similar with version but publish the npm packages

`lerna publish from-package`
this mode not requires to the packages being versioned with the `lerna version` which makes easier for workspaces with own versioning scripts.

#### Fixed

This is the default mode for versioning, and means that all the project follows one line of version

#### Independent

`npx lerna init --independent` or Set the version key in lerna.json to independent to run in independent mode.

Independent mode Lerna projects allows maintainers to increment package versions independently of each other. Each time you publish, you will get a prompt for each package that has changed to specify if it's a patch, minor, major or custom change.

---

All information was obtained from <https://monorepo.tools/> and <https://lerna.js.org/>
