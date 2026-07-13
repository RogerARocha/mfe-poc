# Creating the Workspace

Creating angular workspace without application, for better visualization

`ng new mfe-enterprise-poc --no-create-application`

![Creating angular](..\prints\AngularInit.png)

`npx lerna init --independent --dryRun`

Initializing lerna with tag independent, I think that creates more modularity
![lerna error](..\prints\LernaError.png)

"lerna ERR! Cannot initialize lerna because your package manager has not been configured to use `workspaces`, and you have not explicitly specified any packages to operate on"

angular initiates without the configuration for workspaces this shocks with lerna init without

adding manually the key `workspaces` to package.json, don't know if theres a better way to do it

Now finish lerna Init without problems

![previewLerna](..\prints\LernaPreview.png)

`npx lerna init --independent`

![lernaInit](..\prints\LernaInit.png)

creating the individual applications

when doing I had to configure each package individually to lerna see the projects.

Like that I create a bridge between the angular and lerna, so lerna executes the scripts they are passed to the angular.

To see if lerna can reach the projects with this config now `npx lerna ls`

![LernaSee](..\prints\LernaSee.png)