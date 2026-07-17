import { Component, computed, signal } from '@angular/core';
import { Card, List } from 'shared-ui';
import { DecimalPipe } from '@angular/common';

interface Transaction {
  name: string;
  category: string;
  value: number;
  type: 'sale' | 'cost';
}

@Component({
  selector: 'app-finance',
  imports: [Card, List, DecimalPipe],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
})
export class Finance {
  protected readonly transactions = signal<Transaction[]>([
    { name: 'Itajaí Port Fish Auction', category: 'Auction Sales', value: 42500, type: 'sale' },
    { name: 'Marine Diesel Fuel Purchase', category: 'Operational Expenses', value: 12300, type: 'cost' },
    { name: 'Wholesale Deal (Local Restaurant Group)', category: 'Wholesale Sales', value: 18700, type: 'sale' },
    { name: 'Vessel Docking & Port Fees', category: 'Port Fees', value: 1500, type: 'cost' },
    { name: 'Fishing Net Maintenance & Repairs', category: 'Maintenance', value: 850, type: 'cost' },
    { name: 'Itajaí Port Fish Auction (Batch B)', category: 'Auction Sales', value: 29400, type: 'sale' },
    { name: 'Engine Oil & Lubricant Supplies', category: 'Maintenance', value: 1200, type: 'cost' }
  ]);

  protected readonly totalSales = computed(() => {
    return this.transactions()
      .filter(t => t.type === 'sale')
      .reduce((sum, t) => sum + t.value, 0);
  });

  protected readonly operationalCosts = computed(() => {
    return this.transactions()
      .filter(t => t.type === 'cost')
      .reduce((sum, t) => sum + t.value, 0);
  });
}

