import React, { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  BadgeDollarSign,
  Banknote,
  Bell,
  CalendarDays,
  Download,
  Edit3,
  FileSpreadsheet,
  FileOutput,
  Leaf,
  Menu,
  Megaphone,
  Package,
  Plus,
  Printer,
  RadioTower,
  ReceiptText,
  RotateCcw,
  Search,
  Send,
  Settings,
  Sprout,
  Store,
  Trash2,
  TrendingUp,
  TriangleAlert,
  User,
  Users,
  X,
} from 'lucide-react';

const sources = ['Facebook', 'TikTok', 'Viber', 'Phone'];
const paymentStatuses = ['Paid', 'Pending', 'Partial'];
const saleStages = ['Preparing', 'On the way', 'Confirmed'];
const plantTypes = ['Indoor', 'Outdoor', 'Succulent', 'Cactus', 'Flowers', 'Decorative', 'Garden Center', 'Landscaping'];

const heroPlantImages = {
  pos: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Crassula_ovata_700.jpg',
  sales: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Haworthia_cymbiformis_1.jpg',
  invoices: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Zamioculcas_zamiifolia_1.jpg',
  stock: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
  customers: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Pilea_peperomioides_Chinese_money_plant.jpg',
  daily: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Haworthia_cymbiformis_1.jpg',
  monthly: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Senecio_rowleyanus.jpg',
  export: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Dracaena_sanderiana_2.jpg',
  settings: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/A_potted_aloe_vera_plant.jpg',
};

const samplePlants = [
  {
    id: 1,
    plant_code: 'PZ-IN-101',
    plant_name: 'Monstera Deliciosa',
    plant_type: 'Indoor',
    size: 'M',
    quantity: 24,
    unit_price: 28000,
    ws_price: 18500,
    low_stock_limit: 6,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    plant_code: 'PZ-OUT-044',
    plant_name: 'Bougainvillea Basket',
    plant_type: 'Outdoor',
    size: 'L',
    quantity: 16,
    unit_price: 22000,
    ws_price: 14000,
    low_stock_limit: 5,
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    plant_code: 'PZ-SUC-018',
    plant_name: 'Echeveria Rosette',
    plant_type: 'Succulent',
    size: 'S',
    quantity: 38,
    unit_price: 8500,
    ws_price: 4200,
    low_stock_limit: 10,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    plant_code: 'PZ-CAC-032',
    plant_name: 'Golden Barrel Cactus',
    plant_type: 'Cactus',
    size: 'M',
    quantity: 11,
    unit_price: 18000,
    ws_price: 9500,
    low_stock_limit: 6,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    plant_code: 'PZ-FLW-205',
    plant_name: 'Peace Lily Bloom',
    plant_type: 'Flowers',
    size: 'M',
    quantity: 20,
    unit_price: 26000,
    ws_price: 15500,
    low_stock_limit: 7,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    plant_code: 'PZ-DEC-076',
    plant_name: 'Lucky Bamboo Vase',
    plant_type: 'Decorative',
    size: 'S',
    quantity: 8,
    unit_price: 32000,
    ws_price: 21000,
    low_stock_limit: 8,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    plant_code: 'PZ-GDN-112',
    plant_name: 'Ceramic Pot Set',
    plant_type: 'Garden Center',
    size: 'Set',
    quantity: 42,
    unit_price: 12000,
    ws_price: 7300,
    low_stock_limit: 12,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    plant_code: 'PZ-LND-010',
    plant_name: 'Patio Landscaping Package',
    plant_type: 'Landscaping',
    size: 'Order',
    quantity: 9,
    unit_price: 180000,
    ws_price: 122000,
    low_stock_limit: 3,
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80',
  },
];

const sampleCustomers = [
  { id: 1, cus_name: 'Daw Hnin', cus_ph: '+95 9 420 111 204', cus_address: 'Pyay downtown', source: 'Facebook', created_at: '2026-07-02', updated_at: '2026-07-02' },
  { id: 2, cus_name: 'Ko Min', cus_ph: '+95 9 752 190 334', cus_address: 'Nawaday Road', source: 'Viber', created_at: '2026-07-05', updated_at: '2026-07-05' },
];

const sampleInvoices = [
  {
    id: 1,
    invoice_no: 'PZ-20260708-001',
    customer: sampleCustomers[0],
    sale_date: '2026-07-08',
    payment_status: 'Paid',
    payment_method: 'Cash',
    subtotal: 56000,
    wholesale_total: 37000,
    profit_total: 19000,
    sale_amount: 56000,
    items: [
      { ...samplePlants[0], quantity: 2, sale_amount: 56000, profit_amount: 19000 },
    ],
  },
  {
    id: 2,
    invoice_no: 'PZ-20260707-002',
    customer: sampleCustomers[1],
    sale_date: '2026-07-07',
    payment_status: 'Pending',
    payment_method: 'Mobile Pay',
    subtotal: 32000,
    wholesale_total: 21000,
    profit_total: 11000,
    sale_amount: 32000,
    items: [
      { ...samplePlants[5], quantity: 1, sale_amount: 32000, profit_amount: 11000 },
    ],
  },
];

const navItems = [
  { id: 'pos', label: 'Dashboard', icon: BarChart3, group: 'Selling' },
  { id: 'sales', label: 'Sales', icon: BadgeDollarSign, group: 'Selling' },
  { id: 'invoices', label: 'Invoices', icon: ReceiptText, group: 'Selling' },
  { id: 'stock', label: 'Plant Stock', icon: Leaf, group: 'Selling' },
  { id: 'customers', label: 'Customers', icon: Users, group: 'Selling' },
  { id: 'daily', label: 'Daily Data', icon: CalendarDays, group: 'Reports' },
  { id: 'monthly', label: 'Monthly Data', icon: BarChart3, group: 'Reports' },
  { id: 'export', label: 'Export Center', icon: FileOutput, group: 'Reports' },
  { id: 'settings', label: 'Settings', icon: Settings, group: 'Reports' },
];

const money = (value) => `${Number(value || 0).toLocaleString()} Ks`;
const today = () => new Date().toISOString().slice(0, 10);
const monthNow = () => new Date().toISOString().slice(0, 7);
const clean = (value) => String(value ?? '').toLowerCase();
const saleStageFor = (invoice) => saleStages.includes(invoice?.order_status) ? invoice.order_status : 'Confirmed';

function usePersistentState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function App() {
  const [activePage, setActivePage] = useState('pos');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);
  const [invoiceListOpen, setInvoiceListOpen] = useState(false);
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [plants, setPlants] = usePersistentState('plant-zone-plants', samplePlants);
  const [customers, setCustomers] = usePersistentState('plant-zone-customers', sampleCustomers);
  const [invoices, setInvoices] = usePersistentState('plant-zone-invoices', sampleInvoices);
  const [saleAdjustments, setSaleAdjustments] = usePersistentState('plant-zone-sale-adjustments', []);

  const rows = useMemo(() => flattenInvoiceRows(invoices), [invoices]);

  const nextInvoiceNo = useMemo(() => {
    const dateKey = today().replaceAll('-', '');
    const todaysCount = invoices.filter((invoice) => invoice.invoice_no.includes(dateKey)).length + 1;
    return `PZ-${dateKey}-${String(todaysCount).padStart(3, '0')}`;
  }, [invoices]);

  const todayRows = useMemo(() => rows.filter((row) => row.date === today()), [rows]);
  const monthlyRows = useMemo(() => rows.filter((row) => row.date.startsWith(monthNow())), [rows]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="brand">
          <span className="brand-mark"><Sprout size={24} /></span>
          <div>
            <strong>Plant Zone POS</strong>
            <small>Garden Center | Pyay</small>
          </div>
        </div>
        <nav className="nav-list" aria-label="Main navigation">
          {['Selling', 'Reports'].map((group) => (
            <React.Fragment key={group}>
              <div className="nav-label">{group}</div>
              {navItems.filter((item) => item.group === group).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setActivePage(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </nav>
      </aside>

      <div className="mobile-backdrop" hidden={!sidebarOpen} onClick={() => setSidebarOpen(false)} />

      <main className="main-content">
        <Header activePage={activePage} onMenu={() => setSidebarOpen(true)} onAddInvoice={() => setInvoiceModalOpen(true)} onShowInvoices={() => setInvoiceListOpen(true)} onAddPlant={() => setStockModalOpen(true)} onAddCustomer={() => setCustomerModalOpen(true)} />
        {activePage === 'pos' && (
          <DashboardPage
            plants={plants}
            rows={todayRows}
            invoices={invoices}
            monthlyRows={monthlyRows}
          />
        )}
        {activePage === 'sales' && (
          <SalesPage
            invoices={invoices}
            setInvoices={setInvoices}
            plants={plants}
            setPlants={setPlants}
            customers={customers}
            isFormOpen={invoiceModalOpen}
            setIsFormOpen={setInvoiceModalOpen}
            adjustments={saleAdjustments}
            setAdjustments={setSaleAdjustments}
            nextInvoiceNo={nextInvoiceNo}
          />
        )}
        {activePage === 'invoices' && <InvoiceArchivePage invoices={invoices} />}
        {activePage === 'stock' && <StockPage plants={plants} setPlants={setPlants} adjustments={saleAdjustments} isFormOpen={stockModalOpen} setIsFormOpen={setStockModalOpen} />}
        {activePage === 'customers' && (
          <CustomersPage
            customers={customers}
            setCustomers={setCustomers}
            invoices={invoices}
            isFormOpen={customerModalOpen}
            setIsFormOpen={setCustomerModalOpen}
          />
        )}
        {activePage === 'daily' && <DailyDataPage rows={rows} />}
        {activePage === 'monthly' && <MonthlyDataPage rows={rows} invoices={invoices} />}
        {activePage === 'export' && <ExportCenterPage rows={rows} invoices={invoices} />}
        {activePage === 'settings' && <SettingsPage />}
      </main>
    </div>
  );
}

function Header({ activePage, onMenu, onAddInvoice, onShowInvoices, onAddPlant, onAddCustomer }) {
  const page = navItems.find((item) => item.id === activePage);
  const heroPlant = heroPlantImages[activePage] || heroPlantImages.pos;
  const isSalesPage = activePage === 'sales';
  const isStockPage = activePage === 'stock';
  const isCustomersPage = activePage === 'customers';
  return (
    <>
      <header className="topbar">
        <button className="icon-button mobile-menu" onClick={onMenu} aria-label="Open navigation">
          <Menu size={20} />
        </button>
        <label className="top-search">
          <Search size={18} />
          <input placeholder="Search plant code, plant name, invoice, customer phone..." />
        </label>
        <button className="soft-button"><Store size={17} /> Plant Zone Main</button>
        <button className="soft-button"><CalendarDays size={17} /> 08 Jul 2026</button>
        <button className="icon-button" aria-label="Notifications"><Bell size={18} /></button>
      </header>
      <section className={`hero hero-${activePage}`}>
        <div className="hero-plant-photo" aria-hidden="true">
          <img
            src={heroPlant}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80';
            }}
          />
        </div>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Plant Zone Garden Center</p>
            <h1>{page?.label || 'Dashboard'}</h1>
            <p className="hero-copy">{activePage === 'pos' ? 'Key sales, invoice, stock, customer, and source health in one overview.' : 'A modern POS for plant sales, social media customers, delivery orders, reservations, landscaping service, invoices, and export-ready daily/monthly data.'}</p>
            {(isSalesPage || isStockPage || isCustomersPage) && (
              <div className="hero-actions">
                {isSalesPage && <button className="primary-button" onClick={onAddInvoice}><Plus size={17} /> New Sale</button>}
                {isStockPage && <button className="primary-button" onClick={onAddPlant}><Plus size={17} /> Add Plant</button>}
                {isCustomersPage && <button className="primary-button" onClick={onAddCustomer}><Plus size={17} /> Add Customer</button>}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function DashboardPage({ plants, rows, invoices, monthlyRows }) {
  const todaySales = rows.reduce((sum, row) => sum + row.sale_amount, 0);
  const monthlySales = monthlyRows.reduce((sum, row) => sum + row.sale_amount, 0);
  const todayProfit = rows.reduce((sum, row) => sum + row.profit, 0);
  const monthlyProfit = monthlyRows.reduce((sum, row) => sum + row.profit, 0);
  const invoiceCount = new Set(rows.map((row) => row.invoice_no)).size;
  const lowStockPlants = plants.filter((plant) => plant.quantity <= plant.low_stock_limit);
  const stockUnits = plants.reduce((sum, plant) => sum + Number(plant.quantity || 0), 0);
  const stockValue = plants.reduce((sum, plant) => sum + (Number(plant.quantity || 0) * Number(plant.unit_price || 0)), 0);
  const topSource = bestBy(rows.length ? rows : monthlyRows, 'customer_source') || '-';
  const recentInvoices = [...invoices].sort((a, b) => String(b.sale_date).localeCompare(String(a.sale_date))).slice(0, 5);
  const sourceRows = rows.length ? rows : monthlyRows;
  const sourceTotals = sources.map((source) => ({
    source,
    total: sourceRows.filter((row) => row.customer_source === source).reduce((sum, row) => sum + row.sale_amount, 0),
  }));
  const sourceMax = Math.max(1, ...sourceTotals.map((item) => item.total));

  return (
    <section className="dashboard-page">
      <div className="summary-grid reveal">
        <MetricCard icon={<Banknote size={18} />} label="Today Sales" value={money(todaySales)} detail={`${invoiceCount} invoices today`} />
        <MetricCard icon={<TrendingUp size={18} />} label="Monthly Sales" value={money(monthlySales)} detail={`${money(monthlyProfit)} profit`} />
        <MetricCard icon={<BadgeDollarSign size={18} />} label="Today Profit" value={money(todayProfit)} detail="Unit price minus WS cost" />
        <MetricCard icon={<Package size={18} />} label="Stock Value" value={money(stockValue)} detail={`${stockUnits} units in stock`} />
        <MetricCard icon={<TriangleAlert size={18} />} label="Low Stock" value={lowStockPlants.length} detail="Items needing refill" />
      </div>

      <div className="dashboard-grid">
        <section className="panel reveal dashboard-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <RadioTower size={20} />
              <div><h2>Sales by Source</h2><p>{rows.length ? 'Today customer source mix.' : 'Monthly source mix shown because today has no rows.'}</p></div>
            </div>
          </div>
          <div className="source-list">
            {sourceTotals.map((item) => (
              <div className="source-row" key={item.source}>
                <span>{item.source}</span>
                <div className="bar"><i style={{ width: `${Math.max(8, Math.round((item.total / sourceMax) * 100))}%` }} /></div>
                <b>{money(item.total)}</b>
              </div>
            ))}
          </div>
          <div className="dashboard-note"><Megaphone size={16} /> Top source: {topSource}</div>
        </section>

        <section className="panel reveal dashboard-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <ReceiptText size={20} />
              <div><h2>Recent Invoices</h2><p>Latest sales records.</p></div>
            </div>
          </div>
          <div className="dashboard-list">
            {recentInvoices.map((invoice) => (
              <div className="dashboard-list-row" key={invoice.id}>
                <span><strong>{invoice.invoice_no}</strong><small>{invoice.customer.cus_name} - {invoice.sale_date}</small></span>
                <b>{money(invoice.sale_amount)}</b>
              </div>
            ))}
            {recentInvoices.length === 0 && <div className="empty-state">No invoices yet.</div>}
          </div>
        </section>

        <section className="panel reveal dashboard-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <TriangleAlert size={20} />
              <div><h2>Stock Attention</h2><p>Plants at or below their low-stock limit.</p></div>
            </div>
          </div>
          <div className="dashboard-list">
            {lowStockPlants.slice(0, 6).map((plant) => (
              <div className="dashboard-list-row" key={plant.id}>
                <span><strong>{plant.plant_name}</strong><small>{plant.plant_code} - {plant.plant_type} / Size {plant.size}</small></span>
                <b>{plant.quantity}</b>
              </div>
            ))}
            {lowStockPlants.length === 0 && <div className="empty-state">Stock levels look healthy.</div>}
          </div>
        </section>
      </div>
    </section>
  );
}

function Totals({ totals }) {
  const itemTotal = Number(totals.gross ?? totals.subtotal ?? 0);
  const discount = Number(totals.discount || 0);
  const totalCost = Number(totals.total ?? (itemTotal - discount));
  return (
    <div className="totals">
      <div><span>Item total</span><strong>{money(itemTotal)}</strong></div>
      {discount > 0 && <div className="discount-total"><span>Discount</span><strong>- {money(discount)}</strong></div>}
      <div className="grand-total"><span>Total cost</span><strong>{money(totalCost)}</strong></div>
    </div>
  );
}

function SalesPage({ invoices, setInvoices, plants, setPlants, customers, isFormOpen, setIsFormOpen, adjustments, setAdjustments, nextInvoiceNo }) {
  const adjustmentTypes = ['Customer return', 'Damaged plant return', 'Refund', 'Exchange'];
  const [draft, setDraft] = useState({
    plant_id: plants[0]?.id || '',
    customer_id: '',
    type: 'Customer return',
    quantity: 1,
    amount: 0,
    reason: '',
    stock_action: 'Add to stock',
  });
  const selectedPlant = plants.find((plant) => String(plant.id) === String(draft.plant_id));
  const selectedCustomer = customers.find((customer) => String(customer.id) === String(draft.customer_id));
  const stageCount = (stage) => invoices.filter((invoice) => saleStageFor(invoice) === stage).length;

  const updateSaleStage = (invoice, stage) => {
    if (!invoice.stock_deducted) {
      setPlants((current) => current.map((plant) => {
        const soldItem = invoice.items.find((item) => String(item.plant_id) === String(plant.id) || item.plant_code === plant.plant_code);
        return soldItem ? { ...plant, quantity: Math.max(0, Number(plant.quantity || 0) - Number(soldItem.quantity || 0)) } : plant;
      }));
    }
    setInvoices((current) => current.map((item) => item.id === invoice.id ? {
      ...item,
      order_status: stage,
      stock_deducted: true,
      updated_at: new Date().toISOString(),
    } : item));
  };

  const updatePaidAmount = (invoice, value) => {
    const paidAmount = Math.min(Math.max(Number(value) || 0, 0), Number(invoice.sale_amount || 0));
    const paymentStatus = paidAmount <= 0 ? 'Pending' : paidAmount >= Number(invoice.sale_amount || 0) ? 'Paid' : 'Partial';
    setInvoices((current) => current.map((item) => item.id === invoice.id ? { ...item, paid_amount: paidAmount, payment_status: paymentStatus } : item));
  };

  const finishAdjustment = () => {
    const quantity = Math.max(Number(draft.quantity) || 0, 0);
    if (!selectedPlant || !quantity || !draft.reason.trim()) return;
    if (draft.stock_action !== 'No stock change') {
      const direction = draft.stock_action === 'Add to stock' ? 1 : -1;
      setPlants((current) => current.map((plant) => (
        String(plant.id) === String(selectedPlant.id)
          ? { ...plant, quantity: Math.max(0, Number(plant.quantity || 0) + (direction * quantity)) }
          : plant
      )));
    }
    setAdjustments((current) => [{
      ...draft,
      id: Date.now(),
      customer_name: selectedCustomer?.cus_name || 'Walk-in / no customer',
      plant_name: selectedPlant.plant_name,
      plant_code: selectedPlant.plant_code,
      date: today(),
      quantity,
      amount: Number(draft.amount || 0),
      status: 'Completed',
    }, ...current]);
    setDraft((current) => ({ ...current, quantity: 1, amount: 0, reason: '' }));
  };

  return (
    <section className="sales-page">
      <div className="summary-grid reveal">
        <MetricCard icon={<Package size={18} />} label="Preparing" value={stageCount('Preparing')} detail="Getting orders ready" />
        <MetricCard icon={<Send size={18} />} label="On the way" value={stageCount('On the way')} detail="Orders in delivery" />
        <MetricCard icon={<ReceiptText size={18} />} label="Confirmed" value={stageCount('Confirmed')} detail="Sales completed" />
        <MetricCard icon={<BadgeDollarSign size={18} />} label="Paid sales" value={invoices.filter((item) => item.payment_status === 'Paid').length} detail="Payment completed" />
      </div>

      <section className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Sales Pipeline</h2><p>Move each sale through Preparing, On the way, and Confirmed while tracking payment amounts.</p></div>
          <button className="primary-button" onClick={() => setIsFormOpen(true)}><Plus size={17} /> New Sale</button>
        </div>
        <div className="sales-pipeline">
          {invoices.map((invoice) => (
            <article className="sale-card" key={invoice.id}>
              <div className="sale-card-main">
                <span className={`status-pill ${clean(saleStageFor(invoice)).replaceAll(' ', '-')}`}>{saleStageFor(invoice)}</span>
                <strong>{invoice.invoice_no} · {invoice.customer.cus_name}</strong>
                <small>{invoice.items.length} item(s) · {money(invoice.sale_amount)} · {invoice.sale_date}</small>
              </div>
              <label>Sale stage<select value={saleStageFor(invoice)} onChange={(event) => updateSaleStage(invoice, event.target.value)}>{saleStages.map((stage) => <option key={stage}>{stage}</option>)}</select></label>
              <label>Paid amount<input type="number" min="0" max={invoice.sale_amount} value={invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)} onChange={(event) => updatePaidAmount(invoice, event.target.value)} /></label>
              <div className="payment-balance"><span>{invoice.payment_status}</span><strong>Balance {money(Math.max(0, Number(invoice.sale_amount || 0) - Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0))))}</strong></div>
            </article>
          ))}
          {!invoices.length && <div className="empty-state">No sales yet. Create the first sale to begin.</div>}
        </div>
      </section>

      <div className="sales-operations-grid">
        <section className="panel reveal">
          <div className="panel-title-row">
            <div className="panel-title"><RotateCcw size={20} /><div><h2>Return / Damage Process</h2><p>Choose an item, an optional customer, and the exact stock change to apply.</p></div></div>
          </div>
          <div className="form-grid adjustment-form">
            <label className="span-2">Plant item<select value={draft.plant_id} onChange={(event) => setDraft({ ...draft, plant_id: event.target.value })}><option value="">Choose an item</option>{plants.map((plant) => <option value={plant.id} key={plant.id}>{plant.plant_name} — {plant.plant_code} — stock {plant.quantity}</option>)}</select></label>
            <label className="span-2">Customer (optional)<select value={draft.customer_id} onChange={(event) => setDraft({ ...draft, customer_id: event.target.value })}><option value="">Walk-in / no customer</option>{customers.map((customer) => <option value={customer.id} key={customer.id}>{customer.cus_name} — {customer.cus_ph}</option>)}</select></label>
            <label>Process<select value={draft.type} onChange={(event) => setDraft({ ...draft, type: event.target.value })}>{adjustmentTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label>Stock command<select value={draft.stock_action} onChange={(event) => setDraft({ ...draft, stock_action: event.target.value })}><option>Add to stock</option><option>Remove from stock</option><option>No stock change</option></select></label>
            <label>Quantity<input type="number" min="1" value={draft.quantity} onChange={(event) => setDraft({ ...draft, quantity: event.target.value })} /><small>{selectedPlant ? `Current stock: ${selectedPlant.quantity}` : 'Choose an item first'}</small></label>
            <label>Refund amount<input type="number" min="0" value={draft.amount} onChange={(event) => setDraft({ ...draft, amount: event.target.value })} /></label>
            <label className="span-2">Reason / notes<textarea value={draft.reason} onChange={(event) => setDraft({ ...draft, reason: event.target.value })} placeholder="Why is this item being returned or changed?" /></label>
            <button className="primary-button span-2" onClick={finishAdjustment}><RotateCcw size={17} /> Apply stock</button>
          </div>
        </section>

        <section className="panel reveal">
          <div className="panel-title-row"><div><h2>Completed Processes</h2><p>A clear history of returns, damage, exchanges, and refunds.</p></div></div>
          <div className="adjustment-list">
            {adjustments.map((item) => (
              <article className="adjustment-card" key={item.id}>
                <div><span className="status-pill completed">Applied</span><strong>{item.type} · {item.plant_name || item.plant_code}</strong><small>{item.customer_name || 'Walk-in / no customer'} · {item.date}</small><p>{item.reason}</p><small>{item.quantity} unit(s) · {item.stock_action} · {money(item.amount)}</small></div>
                <button className="icon-button danger" onClick={() => setAdjustments((current) => current.filter((entry) => entry.id !== item.id))} aria-label="Delete process record"><Trash2 size={16} /></button>
              </article>
            ))}
            {!adjustments.length && <div className="empty-state">No completed return or damage processes yet.</div>}
          </div>
        </section>
      </div>

      <InvoicesPage invoices={invoices} setInvoices={setInvoices} plants={plants} setPlants={setPlants} customers={customers} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} isListOpen={false} setIsListOpen={() => {}} nextInvoiceNo={nextInvoiceNo} showWorkspace={false} />
    </section>
  );
}

function InvoiceArchivePage({ invoices }) {
  const [filters, setFilters] = useState({ customer: '', status: '', date: '' });
  const [selectedId, setSelectedId] = useState(invoices[0]?.id || null);
  const filtered = invoices.filter((invoice) => (
    (!filters.customer || clean(invoice.customer.cus_name).includes(clean(filters.customer)))
    && (!filters.status || invoice.payment_status === filters.status)
    && (!filters.date || invoice.sale_date === filters.date)
  ));
  const selected = invoices.find((invoice) => invoice.id === selectedId) || filtered[0];

  return (
    <section className="invoice-archive">
      <div className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Invoice Archive</h2><p>Search, open, print, and export finalized sales invoices.</p></div>
          <button className="ghost-button" onClick={() => exportRows('plant-zone-invoices', flattenInvoiceRows(filtered), 'csv')}><Download size={17} /> Export CSV</button>
        </div>
        <div className="filter-grid">
          <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
          <label>Customer<input value={filters.customer} onChange={(event) => setFilters({ ...filters, customer: event.target.value })} placeholder="Search customer" /></label>
          <label>Status<select value={filters.status} onChange={(event) => setFilters({ ...filters, status: event.target.value })}><option value="">All statuses</option>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
        </div>
        <div className="invoice-archive-list">
          {filtered.map((invoice) => (
            <button className={`invoice-row ${selected?.id === invoice.id ? 'active' : ''}`} key={invoice.id} onClick={() => setSelectedId(invoice.id)}>
              <span><strong>{invoice.invoice_no}</strong><small>{invoice.sale_date} · {invoice.customer.cus_name}</small></span>
              <span><strong>{money(invoice.sale_amount)}</strong><small>{invoice.payment_status}</small></span>
            </button>
          ))}
          {!filtered.length && <div className="empty-state">No invoices match these filters.</div>}
        </div>
      </div>
      <InvoiceDetail invoice={selected} onEdit={() => {}} onDelete={() => {}} readOnly />
    </section>
  );
}

function InvoicesPage({ invoices, setInvoices, plants, setPlants, customers, isFormOpen, setIsFormOpen, isListOpen, setIsListOpen, nextInvoiceNo, showWorkspace = true }) {
  const emptyItem = { plant_id: '', plant_name: '', plant_code: '', plant_type: 'Indoor', size: 'M', quantity: 1, unit_price: 0, ws_price: 0 };
  const emptyDraft = {
    invoice_no: nextInvoiceNo,
    sale_date: today(),
    payment_status: 'Paid',
    payment_method: 'Cash',
    paid_amount: 0,
    order_status: 'Preparing',
    discount_amount: 0,
    customer: { cus_name: '', cus_ph: '', cus_address: '', source: 'Facebook' },
    items: [emptyItem],
  };
  const [filters, setFilters] = useState({ date: '', customer: '', status: '', source: '' });
  const [selectedId, setSelectedId] = useState(invoices[0]?.id ?? null);
  const [draft, setDraft] = useState(emptyDraft);
  const [editingId, setEditingId] = useState(null);
  const selected = invoices.find((invoice) => invoice.id === selectedId) || invoices[0];
  const filtered = invoices.filter((invoice) => (
    (!filters.date || invoice.sale_date === filters.date)
    && (!filters.customer || clean(invoice.customer.cus_name).includes(clean(filters.customer)))
    && (!filters.status || invoice.payment_status === filters.status)
    && (!filters.source || invoice.customer.source === filters.source)
  ));

  useEffect(() => {
    if (!selectedId && invoices[0]) setSelectedId(invoices[0].id);
  }, [invoices, selectedId]);

  useEffect(() => {
    if (!editingId) setDraft((current) => ({ ...current, invoice_no: nextInvoiceNo }));
  }, [editingId, nextInvoiceNo]);

  const invoiceTotals = useMemo(() => {
    const itemTotals = draft.items.reduce((totals, item) => {
      const quantity = Number(item.quantity) || 0;
      const unit = Number(item.unit_price) || 0;
      const ws = Number(item.ws_price) || 0;
      totals.gross += quantity * unit;
      totals.wholesale += quantity * ws;
      return totals;
    }, { gross: 0, wholesale: 0 });
    const discount = Math.min(Math.max(Number(draft.discount_amount) || 0, 0), itemTotals.gross);
    const total = itemTotals.gross - discount;
    return { ...itemTotals, discount, total, profit: total - itemTotals.wholesale };
  }, [draft.items, draft.discount_amount]);

  const closeForm = () => {
    setDraft({ ...emptyDraft, invoice_no: nextInvoiceNo });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const editInvoice = (invoice) => {
    if (!invoice) return;
    setDraft({
      invoice_no: invoice.invoice_no,
      sale_date: invoice.sale_date,
      payment_status: invoice.payment_status,
      payment_method: invoice.payment_method,
      paid_amount: Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0)),
      order_status: invoice.order_status || 'Confirmed',
      discount_amount: Number(invoice.discount_amount || 0),
      customer: { ...invoice.customer },
      items: invoice.items.map((item) => ({
        plant_id: item.plant_id || '',
        plant_name: item.plant_name,
        plant_code: item.plant_code,
        plant_type: item.plant_type,
        size: item.size,
        quantity: item.quantity,
        unit_price: item.unit_price,
        ws_price: item.ws_price,
      })),
    });
    setEditingId(invoice.id);
    setIsFormOpen(true);
  };

  const selectCustomer = (customerId) => {
    const customer = customers.find((item) => String(item.id) === customerId);
    if (!customer) {
      setDraft((current) => ({
        ...current,
        customer: { cus_name: '', cus_ph: '', cus_address: '', source: current.customer.source || 'Facebook' },
      }));
      return;
    }
    setDraft((current) => ({
      ...current,
      customer: {
        id: customer.id,
        cus_name: customer.cus_name || '',
        cus_ph: customer.cus_ph || '',
        cus_address: customer.cus_address || '',
        source: customer.source || 'Facebook',
      },
    }));
  };

  const selectPlant = (index, plantId) => {
    const plant = plants.find((item) => String(item.id) === plantId);
    if (!plant) return;
    updateDraftItem(index, {
      plant_id: plant.id,
      plant_name: plant.plant_name,
      plant_code: plant.plant_code,
      plant_type: plant.plant_type,
      size: plant.size,
      unit_price: plant.unit_price,
      ws_price: plant.ws_price,
    });
  };

  const updateDraftItem = (index, updates) => {
    setDraft((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...updates } : item)),
    }));
  };

  const saveInvoice = () => {
    if (!draft.customer.cus_name.trim() || !draft.items.some((item) => item.plant_name.trim())) return;
    const items = draft.items
      .filter((item) => item.plant_name.trim())
      .map((item) => {
        const quantity = Number(item.quantity) || 0;
        const unit = Number(item.unit_price) || 0;
        const ws = Number(item.ws_price) || 0;
        return {
          plant_id: item.plant_id || Date.now(),
          plant_name: item.plant_name,
          plant_code: item.plant_code,
          plant_type: item.plant_type,
          size: item.size,
          quantity,
          unit_price: unit,
          ws_price: ws,
          sale_amount: quantity * unit,
          profit_amount: (quantity * (unit - ws)) - (invoiceTotals.gross ? invoiceTotals.discount * ((quantity * unit) / invoiceTotals.gross) : 0),
        };
      });
    const paidAmount = draft.payment_status === 'Paid'
      ? invoiceTotals.total
      : Math.min(Math.max(Number(draft.paid_amount) || 0, 0), invoiceTotals.total);
    const paymentStatus = paidAmount <= 0 ? 'Pending' : paidAmount >= invoiceTotals.total ? 'Paid' : 'Partial';
    const invoice = {
      id: editingId || Date.now(),
      invoice_no: draft.invoice_no || nextInvoiceNo,
      customer: { id: editingId || Date.now(), ...draft.customer, created_at: today(), updated_at: today() },
      sale_date: draft.sale_date || today(),
      payment_status: paymentStatus,
      payment_method: draft.payment_method,
      paid_amount: paidAmount,
      order_status: draft.order_status || 'Preparing',
      stock_deducted: true,
      gross_total: invoiceTotals.gross,
      discount_amount: invoiceTotals.discount,
      subtotal: invoiceTotals.total,
      wholesale_total: invoiceTotals.wholesale,
      profit_total: invoiceTotals.profit,
      sale_amount: invoiceTotals.total,
      items,
      created_at: new Date().toISOString(),
    };
    if (editingId) {
      setInvoices((current) => current.map((item) => (item.id === editingId ? invoice : item)));
    } else {
      setPlants?.((current) => current.map((plant) => {
        const soldItem = items.find((item) => String(item.plant_id) === String(plant.id) || item.plant_code === plant.plant_code);
        return soldItem ? { ...plant, quantity: Math.max(0, Number(plant.quantity || 0) - Number(soldItem.quantity || 0)) } : plant;
      }));
      setInvoices((current) => [invoice, ...current]);
      setSelectedId(invoice.id);
    }
    closeForm();
  };

  const invoiceListPanel = (
    <div className="invoice-list-panel">
      <div className="panel-title-row">
        <div><h2>Invoices</h2><p>Filter by date, customer, status, and source.</p></div>
        <button className="ghost-button" onClick={() => exportRows('plant-zone-invoices', flattenInvoiceRows(filtered), 'csv')}><Download size={17} /> CSV</button>
      </div>
      <div className="filter-grid invoice-list-filters">
        <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
        <label>Customer<input value={filters.customer} onChange={(event) => setFilters({ ...filters, customer: event.target.value })} placeholder="Customer name" /></label>
        <label>Status<select value={filters.status} onChange={(event) => setFilters({ ...filters, status: event.target.value })}><option value="">All</option>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
        <label>Source<select value={filters.source} onChange={(event) => setFilters({ ...filters, source: event.target.value })}><option value="">All</option>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
      </div>
      <div className="list-stack">
        {filtered.map((invoice) => (
          <button key={invoice.id} className={`invoice-row ${selected?.id === invoice.id ? 'active' : ''}`} onClick={() => { setSelectedId(invoice.id); setIsListOpen(false); }}>
            <span><strong>{invoice.invoice_no}</strong><small>{invoice.customer.cus_name} - {invoice.customer.source}</small></span>
            <span><strong>{money(invoice.sale_amount)}</strong><small>{invoice.payment_status}</small></span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {showWorkspace && <section className="page-grid invoice-page-grid invoice-detail-grid">
        <InvoiceDetail invoice={selected} onEdit={editInvoice} onDelete={(id) => setInvoices((current) => current.filter((invoice) => invoice.id !== id))} />
      </section>}
      {isListOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setIsListOpen(false)}>
          <div className="stock-modal invoice-list-modal" role="dialog" aria-modal="true" aria-labelledby="invoice-list-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="invoice-list-title">Invoice List</h2>
                <p>Choose an invoice or export the filtered rows.</p>
              </div>
              <button className="icon-button" onClick={() => setIsListOpen(false)} aria-label="Close invoice list"><X size={17} /></button>
            </div>
            {invoiceListPanel}
          </div>
        </div>
      )}
      {isFormOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeForm}>
          <div className="stock-modal invoice-modal" role="dialog" aria-modal="true" aria-labelledby="invoice-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="invoice-modal-title">{editingId ? 'Edit Sale' : 'New Sale'}</h2>
                <p>{editingId ? 'Update sale customer, payment, and item rows.' : 'Build the sale, then confirm it from the Sales Pipeline.'}</p>
              </div>
              <button className="icon-button" onClick={closeForm} aria-label="Close invoice form"><X size={17} /></button>
            </div>
            <div className="form-grid invoice-form">
              <label>Invoice no<input value={draft.invoice_no} onChange={(event) => setDraft({ ...draft, invoice_no: event.target.value })} /></label>
              <label>Sale date<input type="date" value={draft.sale_date} onChange={(event) => setDraft({ ...draft, sale_date: event.target.value })} /></label>
              <label className="span-2">Choose customer<select value={draft.customer.id || ''} onChange={(event) => selectCustomer(event.target.value)}><option value="">New customer / not saved yet</option>{customers.map((customer) => <option value={customer.id} key={customer.id}>{customer.cus_name} - {customer.cus_ph || customer.source}</option>)}</select></label>
              <label>Customer name<input value={draft.customer.cus_name} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_name: event.target.value } })} /></label>
              <label>Phone<input value={draft.customer.cus_ph} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_ph: event.target.value } })} /></label>
              <label>Address<input value={draft.customer.cus_address} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, cus_address: event.target.value } })} /></label>
              <label>Source<select value={draft.customer.source} onChange={(event) => setDraft({ ...draft, customer: { ...draft.customer, source: event.target.value } })}>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
              <label>Payment status<select value={draft.payment_status} onChange={(event) => setDraft({ ...draft, payment_status: event.target.value, paid_amount: event.target.value === 'Paid' ? invoiceTotals.total : event.target.value === 'Pending' ? 0 : draft.paid_amount })}>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
              <label>Payment method<input value={draft.payment_method} onChange={(event) => setDraft({ ...draft, payment_method: event.target.value })} /></label>
              {draft.payment_status === 'Partial' && <label className="span-2">Amount paid (Ks)<input type="number" min="0" max={invoiceTotals.total} value={draft.paid_amount} onChange={(event) => setDraft({ ...draft, paid_amount: event.target.value })} /><small>Balance: {money(Math.max(0, invoiceTotals.total - Number(draft.paid_amount || 0)))}</small></label>}
              <label className="span-2">Sale discount (Ks)<input type="number" min="0" max={invoiceTotals.gross} value={draft.discount_amount} onChange={(event) => setDraft({ ...draft, discount_amount: event.target.value })} placeholder="0" /></label>
            </div>
            <div className="invoice-item-editor">
              {draft.items.map((item, index) => (
                <div className="invoice-edit-row" key={`draft-item-${index}`}>
                  <label>Plant<select value={item.plant_id || ''} onChange={(event) => selectPlant(index, event.target.value)}><option value="">Choose stock plant</option>{plants.map((plant) => <option value={plant.id} key={plant.id}>{plant.plant_name} - {plant.plant_code}</option>)}</select></label>
                  <label>Qty<input type="number" value={item.quantity} onChange={(event) => updateDraftItem(index, { quantity: Number(event.target.value) })} /></label>
                  <label>Unit<input type="number" value={item.unit_price} onChange={(event) => updateDraftItem(index, { unit_price: Number(event.target.value) })} /></label>
                  <label>WS<input type="number" value={item.ws_price} onChange={(event) => updateDraftItem(index, { ws_price: Number(event.target.value) })} /></label>
                  <button className="icon-button danger" onClick={() => setDraft((current) => ({ ...current, items: current.items.filter((_, itemIndex) => itemIndex !== index) }))} aria-label="Remove invoice item"><Trash2 size={16} /></button>
                </div>
              ))}
              <button className="ghost-button" onClick={() => setDraft((current) => ({ ...current, items: [...current.items, emptyItem] }))}><Plus size={17} /> Add item</button>
            </div>
            <Totals totals={{ gross: invoiceTotals.gross, discount: invoiceTotals.discount, total: invoiceTotals.total }} />
            <button className="primary-button wide" onClick={saveInvoice}><Plus size={17} /> {editingId ? 'Update sale' : 'Save new sale'}</button>
          </div>
        </div>
      )}
    </>
  );
}

function InvoiceDetail({ invoice, onEdit, onDelete, readOnly = false }) {
  if (!invoice) return <div className="panel empty-state">No invoices yet.</div>;
  const paidAmount = Number(invoice.paid_amount ?? (invoice.payment_status === 'Paid' ? invoice.sale_amount : 0));
  const balanceAmount = Math.max(0, Number(invoice.sale_amount || 0) - paidAmount);
  return (
    <aside className="panel reveal invoice-detail printable">
      <div className="invoice-action-bar">
        <div>
          <h2>{invoice.invoice_no}</h2>
          <p>{invoice.sale_date} - {invoice.payment_method}</p>
        </div>
        <div className="invoice-actions">
          {!readOnly && <button className="ghost-button" onClick={() => onEdit(invoice)}><Edit3 size={17} /> Edit</button>}
          <button className="ghost-button" onClick={() => window.print()}><Printer size={17} /> Print</button>
          <button className="ghost-button" onClick={() => shareText(`${invoice.invoice_no} - ${invoice.customer.cus_name} - ${money(invoice.sale_amount)}`)}><Send size={17} /> Share</button>
          {!readOnly && <button className="ghost-button danger" onClick={() => onDelete(invoice.id)}><Trash2 size={17} /> Delete</button>}
        </div>
      </div>
      <div className="invoice-workspace">
        <div className="shop-invoice">
          <div className="shop-invoice-head">
            <div>
              <span className="invoice-brand-mark"><Leaf size={20} /></span>
              <h2>Plant Zone Garden Center</h2>
              <p>Pyay, Bago Region</p>
              <p>+95 9 756 040646</p>
            </div>
            <div className="invoice-stamp">
              <span>Invoice</span>
              <strong>{invoice.invoice_no}</strong>
              <small>{invoice.sale_date}</small>
              <b className={`invoice-payment-badge ${clean(invoice.payment_status)}`}>{invoice.payment_status}</b>
            </div>
          </div>
          <div className="invoice-info-grid">
            <section className="invoice-party">
              <span className="invoice-section-label">Bill to</span>
              <strong>{invoice.customer.cus_name}</strong>
              <p>{invoice.customer.cus_ph || 'No phone provided'}</p>
              <p>{invoice.customer.cus_address || 'No address provided'}</p>
            </section>
            <section className="invoice-reference">
              <span className="invoice-section-label">Invoice details</span>
              <p><b>Invoice:</b> {invoice.invoice_no}</p>
              <p><b>Date:</b> {invoice.sale_date}</p>
              <p><b>Items:</b> {invoice.items.length}</p>
            </section>
          </div>
          <div className="invoice-table-wrap">
            <table className="shop-invoice-table">
              <thead><tr><th>Item</th><th>Code</th><th>Qty</th><th>Unit</th><th>Total</th></tr></thead>
              <tbody>
                {invoice.items.map((item) => (
                  <tr key={`${invoice.id}-${item.plant_code}`}>
                    <td><strong>{item.plant_name}</strong><small>{item.plant_type} / Size {item.size}</small></td>
                    <td>{item.plant_code}</td>
                    <td>{item.quantity}</td>
                    <td>{money(item.unit_price)}</td>
                    <td>{money(item.sale_amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="invoice-bottom">
            <div className="invoice-note">
              <strong>Thank you for shopping with Plant Zone.</strong>
              <p>Customer source: {invoice.customer.source || 'Walk-in'}</p>
              <p>Please keep this invoice for your records.</p>
            </div>
            <div className="invoice-settlement">
              <Totals totals={{
                gross: invoice.gross_total ?? (Number(invoice.subtotal || 0) + Number(invoice.discount_amount || 0)),
                discount: invoice.discount_amount || 0,
                total: invoice.sale_amount,
              }} />
              <section className="invoice-payment-summary">
                <span className="invoice-section-label">Payment details</span>
                <dl>
                  <div><dt>Method</dt><dd>{invoice.payment_method}</dd></div>
                  <div><dt>Status</dt><dd>{invoice.payment_status}</dd></div>
                  <div><dt>Amount paid</dt><dd>{money(paidAmount)}</dd></div>
                  <div className={balanceAmount > 0 ? 'balance-due' : ''}><dt>Balance due</dt><dd>{money(balanceAmount)}</dd></div>
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function StockPage({ plants, setPlants, adjustments = [], isFormOpen, setIsFormOpen }) {
  const emptyPlant = { plant_name: '', plant_code: '', plant_type: 'Indoor', size: 'M', quantity: 0, unit_price: 0, ws_price: 0, low_stock_limit: 5, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80' };
  const [draft, setDraft] = useState(emptyPlant);
  const [editingId, setEditingId] = useState(null);
  const [filters, setFilters] = useState({ type: '', size: '', minPrice: '', maxPrice: '' });
  const [history, setHistory] = usePersistentState('plant-zone-stock-history', [
    { id: 1, date: '2026-07-08', plant_name: 'Monstera Deliciosa', type: 'Stock out', quantity: 2 },
    { id: 2, date: '2026-07-06', plant_name: 'Ceramic Pot Set', type: 'Stock in', quantity: 20 },
  ]);
  const sizes = useMemo(() => Array.from(new Set(plants.map((plant) => plant.size).filter(Boolean))).sort(), [plants]);
  const stockTotals = useMemo(() => plants.reduce((totals, plant) => ({
    units: totals.units + Number(plant.quantity || 0),
    value: totals.value + (Number(plant.quantity || 0) * Number(plant.unit_price || 0)),
    lowStock: totals.lowStock + (Number(plant.quantity || 0) <= Number(plant.low_stock_limit || 0) ? 1 : 0),
  }), { units: 0, value: 0, lowStock: 0 }), [plants]);
  const outOfStockPlants = plants.filter((plant) => Number(plant.quantity || 0) === 0);
  const lowStockPlants = plants.filter((plant) => Number(plant.quantity || 0) > 0 && Number(plant.quantity || 0) <= Number(plant.low_stock_limit || 0));
  const damagedRecords = adjustments.filter((item) => item.type === 'Damaged plant return');
  const filteredPlants = useMemo(() => plants.filter((plant) => {
    const minPrice = filters.minPrice === '' ? null : Number(filters.minPrice);
    const maxPrice = filters.maxPrice === '' ? null : Number(filters.maxPrice);
    return (
      (!filters.type || plant.plant_type === filters.type)
      && (!filters.size || plant.size === filters.size)
      && (minPrice === null || Number(plant.unit_price || 0) >= minPrice)
      && (maxPrice === null || Number(plant.unit_price || 0) <= maxPrice)
    );
  }), [plants, filters]);

  const savePlant = () => {
    if (!draft.plant_name || !draft.plant_code) return;
    if (editingId) {
      setPlants((current) => current.map((plant) => (plant.id === editingId ? { ...draft, id: editingId, updated_at: today() } : plant)));
    } else {
      setPlants((current) => [{ ...draft, id: Date.now(), created_at: today(), updated_at: today() }, ...current]);
    }
    setHistory((current) => [{ id: Date.now(), date: today(), plant_name: draft.plant_name, type: editingId ? 'Edit' : 'Stock in', quantity: Number(draft.quantity) }, ...current]);
    setDraft(emptyPlant);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const closeForm = () => {
    setDraft(emptyPlant);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const editPlant = (plant) => {
    setDraft(plant);
    setEditingId(plant.id);
    setIsFormOpen(true);
  };

  const uploadPlantImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setDraft((current) => ({ ...current, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <section className="page-grid stock-grid">
        <div className="panel reveal stock-panel">
          <div className="stock-summary-strip">
            <div><span>Total plants</span><strong>{plants.length}</strong></div>
            <div><span>Total units</span><strong>{stockTotals.units}</strong></div>
            <div><span>Stock value</span><strong>{money(stockTotals.value)}</strong></div>
            <div><span>Low stock</span><strong>{stockTotals.lowStock}</strong></div>
          </div>
          {(outOfStockPlants.length > 0 || lowStockPlants.length > 0) && (
            <div className="inventory-alerts" role="status" aria-label="Inventory notifications">
              {outOfStockPlants.length > 0 && <div className="inventory-alert danger"><TriangleAlert size={18} /><span><strong>{outOfStockPlants.length} out of stock</strong><small>{outOfStockPlants.map((plant) => plant.plant_name).join(', ')}</small></span></div>}
              {lowStockPlants.length > 0 && <div className="inventory-alert warning"><Bell size={18} /><span><strong>{lowStockPlants.length} low-stock warning{lowStockPlants.length === 1 ? '' : 's'}</strong><small>{lowStockPlants.map((plant) => `${plant.plant_name} (${plant.quantity})`).join(', ')}</small></span></div>}
            </div>
          )}
          <div className="stock-filter-bar">
            <label>Type<select value={filters.type} onChange={(event) => setFilters({ ...filters, type: event.target.value })}><option value="">All types</option>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label>Size<select value={filters.size} onChange={(event) => setFilters({ ...filters, size: event.target.value })}><option value="">All sizes</option>{sizes.map((size) => <option key={size}>{size}</option>)}</select></label>
            <label>Min price<input type="number" value={filters.minPrice} onChange={(event) => setFilters({ ...filters, minPrice: event.target.value })} placeholder="0" /></label>
            <label>Max price<input type="number" value={filters.maxPrice} onChange={(event) => setFilters({ ...filters, maxPrice: event.target.value })} placeholder="100000" /></label>
            <button className="ghost-button" type="button" onClick={() => setFilters({ type: '', size: '', minPrice: '', maxPrice: '' })}><RotateCcw size={16} /> Clear</button>
          </div>
          <div className="stock-result-note">{filteredPlants.length} of {plants.length} plants shown</div>
        <div className="stock-card-grid">
          {filteredPlants.map((plant) => (
            <article key={plant.id} className={`stock-card ${plant.quantity <= plant.low_stock_limit ? 'low-stock-card' : ''} ${Number(plant.quantity) === 0 ? 'out-stock-card' : ''}`}>
              <img src={plant.image || emptyPlant.image} alt={plant.plant_name} onError={(event) => { event.currentTarget.src = emptyPlant.image; }} />
              <div className="stock-card-main">
                <div>
                  <strong>{plant.plant_name}</strong>
                  <span>{plant.plant_code}</span>
                </div>
                <dl className="stock-card-metrics">
                  <div><dt>Qty</dt><dd>{plant.quantity}</dd></div>
                  <div><dt>Sell Price</dt><dd>{money(plant.unit_price)}</dd></div>
                  <div><dt>WS Price</dt><dd>{money(plant.ws_price)}</dd></div>
                </dl>
              </div>
              <div className="stock-card-side">
                <span>{Number(plant.quantity) === 0 ? 'Out of stock' : plant.quantity <= plant.low_stock_limit ? 'Low stock' : 'In stock'}</span>
                <strong>{money(plant.unit_price)}</strong>
                <div className="stock-card-actions">
                  <button className="ghost-button" onClick={() => editPlant(plant)}><Edit3 size={16} /> Edit</button>
                  <button className="ghost-button danger" onClick={() => setPlants((current) => current.filter((item) => item.id !== plant.id))}><Trash2 size={16} /> Delete</button>
                </div>
              </div>
              <div className="stock-card-footer">
                <span><CalendarDays size={14} /> {plant.updated_at || plant.created_at || today()}</span>
                <span><Package size={14} /> {plant.plant_type} / Size {plant.size}</span>
              </div>
            </article>
          ))}
          {filteredPlants.length === 0 && <div className="empty-state">No plants match these filters.</div>}
        </div>
      </div>
      <footer className="panel reveal stock-footer">
        <h3>Stock in/out history</h3>
        <div className="mini-history">
          {history.map((entry) => (
            <span key={entry.id}>{entry.date} - {entry.type} - {entry.plant_name} - {entry.quantity}</span>
          ))}
        </div>
      </footer>
      <section className="panel reveal damaged-stock-panel">
        <div className="panel-title-row">
          <div><h3>Damaged Plant Records</h3><p>Damage properties recorded from the Sales stock process.</p></div>
          <span className="status-pill">{damagedRecords.reduce((sum, item) => sum + Number(item.quantity || 0), 0)} units</span>
        </div>
        <div className="damaged-stock-list">
          {damagedRecords.map((item) => (
            <article key={item.id}>
              <TriangleAlert size={18} />
              <div><strong>{item.plant_name}</strong><span>{item.plant_code} · {item.quantity} unit(s) · {item.date}</span><p>{item.reason}</p></div>
              <b>{item.stock_action}</b>
            </article>
          ))}
          {!damagedRecords.length && <div className="empty-state">No damaged plants have been recorded.</div>}
        </div>
      </section>
      </section>
      {isFormOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeForm}>
          <div className="stock-modal" role="dialog" aria-modal="true" aria-labelledby="stock-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="stock-modal-title">{editingId ? 'Edit Plant' : 'Add Plant'}</h2>
                <p>{editingId ? 'Update the selected stock item.' : 'Create a new stocked plant item.'}</p>
              </div>
              <button className="icon-button" onClick={closeForm} aria-label="Close add plant form"><X size={17} /></button>
            </div>
            <div className="form-grid stock-form">
              <label>Plant name<input value={draft.plant_name} onChange={(event) => setDraft({ ...draft, plant_name: event.target.value })} /></label>
              <label>Plant code<input value={draft.plant_code} onChange={(event) => setDraft({ ...draft, plant_code: event.target.value })} /></label>
              <label>Type<select value={draft.plant_type} onChange={(event) => setDraft({ ...draft, plant_type: event.target.value })}>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label>Size<input value={draft.size} onChange={(event) => setDraft({ ...draft, size: event.target.value })} /></label>
              <label>Quantity<input type="number" value={draft.quantity} onChange={(event) => setDraft({ ...draft, quantity: Number(event.target.value) })} /></label>
              <label>Unit price<input type="number" value={draft.unit_price} onChange={(event) => setDraft({ ...draft, unit_price: Number(event.target.value) })} /></label>
              <label>WS price<input type="number" value={draft.ws_price} onChange={(event) => setDraft({ ...draft, ws_price: Number(event.target.value) })} /></label>
              <label>Low stock limit<input type="number" value={draft.low_stock_limit} onChange={(event) => setDraft({ ...draft, low_stock_limit: Number(event.target.value) })} /></label>
              <label className="span-2 image-upload-field">
                Plant image
                <span className="image-upload-control">
                  <img src={draft.image || emptyPlant.image} alt="Plant preview" onError={(event) => { event.currentTarget.src = emptyPlant.image; }} />
                  <span>Upload image</span>
                  <input type="file" accept="image/*" onChange={uploadPlantImage} />
                </span>
              </label>
              <button className="primary-button span-2" onClick={savePlant}><Plus size={17} /> {editingId ? 'Update plant' : 'Add plant'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CustomersPage({ customers, setCustomers, invoices, isFormOpen, setIsFormOpen }) {
  const emptyCustomer = { cus_name: '', cus_ph: '', cus_address: '', source: 'Facebook' };
  const [source, setSource] = useState('');
  const [draft, setDraft] = useState(emptyCustomer);
  const [editingId, setEditingId] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const filtered = source ? customers.filter((customer) => customer.source === source) : customers;
  const selectedPurchases = selectedCustomer ? invoices.filter((invoice) => (
    invoice.customer.cus_ph === selectedCustomer.cus_ph || invoice.customer.cus_name === selectedCustomer.cus_name
  )) : [];
  const selectedRows = flattenInvoiceRows(selectedPurchases);

  const saveCustomer = () => {
    if (!draft.cus_name.trim() || !draft.cus_ph.trim()) return;
    if (editingId) {
      setCustomers((current) => current.map((customer) => (
        customer.id === editingId ? { ...customer, ...draft, id: editingId, updated_at: today() } : customer
      )));
    } else {
      setCustomers((current) => [{ ...draft, id: Date.now(), created_at: today(), updated_at: today() }, ...current]);
    }
    setDraft(emptyCustomer);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const closeForm = () => {
    setDraft(emptyCustomer);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const editCustomer = (customer) => {
    setDraft({
      cus_name: customer.cus_name || '',
      cus_ph: customer.cus_ph || '',
      cus_address: customer.cus_address || '',
      source: customer.source || 'Facebook',
    });
    setEditingId(customer.id);
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Customers</h2><p>Manage saved customers and sales history.</p></div>
          <label className="compact-select">Source <select value={source} onChange={(event) => setSource(event.target.value)}><option value="">All</option>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="customer-grid">
          {filtered.map((customer) => {
            const related = invoices.filter((invoice) => invoice.customer.cus_ph === customer.cus_ph || invoice.customer.cus_name === customer.cus_name);
            const total = related.reduce((sum, invoice) => sum + invoice.sale_amount, 0);
            const lastDate = related.map((invoice) => invoice.sale_date).sort().at(-1) || customer.updated_at;
            return (
              <article className="customer-card clickable-card" key={customer.id} role="button" tabIndex="0" onClick={() => setSelectedCustomer(customer)} onKeyDown={(event) => { if (event.key === 'Enter') setSelectedCustomer(customer); }}>
                <div className="avatar">{customer.cus_name.slice(0, 1).toUpperCase()}</div>
                <div className="customer-card-main">
                  <strong>{customer.cus_name}</strong>
                  <span>{customer.cus_ph}</span>
                  <small>{customer.cus_address || 'No address saved'}</small>
                </div>
                <div className="customer-metrics">
                  <div><span>Total purchases</span><strong>{money(total)}</strong></div>
                  <div><span>Last purchase</span><strong>{lastDate || '-'}</strong></div>
                </div>
                <div className="customer-card-actions">
                  <button className="ghost-button" onClick={(event) => { event.stopPropagation(); setSelectedCustomer(customer); }}><User size={16} /> View</button>
                  <button className="ghost-button" onClick={(event) => { event.stopPropagation(); editCustomer(customer); }}><Edit3 size={16} /> Edit</button>
                  <button className="ghost-button danger" onClick={(event) => { event.stopPropagation(); setCustomers((current) => current.filter((item) => item.id !== customer.id)); }}><Trash2 size={16} /> Delete</button>
                </div>
                <div className="customer-card-footer">
                  <span><CalendarDays size={14} /> {customer.updated_at || customer.created_at || today()}</span>
                  <span><User size={14} /> {customer.source}</span>
                </div>
                <span className="source-pill">{customer.source}</span>
              </article>
            );
          })}
        </div>
      </section>
      {selectedCustomer && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedCustomer(null)}>
          <div className="stock-modal customer-profile-modal" role="dialog" aria-modal="true" aria-labelledby="customer-profile-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div><h2 id="customer-profile-title">{selectedCustomer.cus_name}</h2><p>{selectedCustomer.cus_ph} · {selectedCustomer.cus_address || 'No address saved'}</p></div>
              <button className="icon-button" onClick={() => setSelectedCustomer(null)} aria-label="Close customer profile"><X size={17} /></button>
            </div>
            <div className="customer-profile-summary">
              <div><span>Lifetime purchases</span><strong>{money(selectedPurchases.reduce((sum, invoice) => sum + Number(invoice.sale_amount || 0), 0))}</strong></div>
              <div><span>Orders</span><strong>{selectedPurchases.length}</strong></div>
              <div><span>Preferred plant</span><strong>{bestBy(selectedRows, 'plant_name') || 'Not enough data'}</strong></div>
              <div><span>Preferred type</span><strong>{bestBy(selectedRows, 'plant_type') || 'Not enough data'}</strong></div>
              <div><span>Shopping source</span><strong>{selectedCustomer.source}</strong></div>
            </div>
            <div className="customer-history">
              <h3>Purchase History</h3>
              {selectedPurchases.map((invoice) => (
                <article key={invoice.id}>
                  <div><strong>{invoice.invoice_no}</strong><span>{invoice.sale_date} · {invoice.payment_status}</span></div>
                  <p>{invoice.items.map((item) => `${item.plant_name} × ${item.quantity}`).join(', ')}</p>
                  <b>{money(invoice.sale_amount)}</b>
                </article>
              ))}
              {!selectedPurchases.length && <div className="empty-state">No purchase history for this customer yet.</div>}
            </div>
          </div>
        </div>
      )}
      {isFormOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeForm}>
          <div className="stock-modal" role="dialog" aria-modal="true" aria-labelledby="customer-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-title-row">
              <div>
                <h2 id="customer-modal-title">{editingId ? 'Edit Customer' : 'Add Customer'}</h2>
                <p>{editingId ? 'Update customer contact details.' : 'Create a saved customer profile.'}</p>
              </div>
              <button className="icon-button" onClick={closeForm} aria-label="Close add customer form"><X size={17} /></button>
            </div>
            <div className="form-grid customer-form">
              <label>Customer name<input value={draft.cus_name} onChange={(event) => setDraft({ ...draft, cus_name: event.target.value })} /></label>
              <label>Phone<input value={draft.cus_ph} onChange={(event) => setDraft({ ...draft, cus_ph: event.target.value })} /></label>
              <label className="span-2">Address<input value={draft.cus_address} onChange={(event) => setDraft({ ...draft, cus_address: event.target.value })} /></label>
              <label>Source<select value={draft.source} onChange={(event) => setDraft({ ...draft, source: event.target.value })}>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
              <button className="primary-button" onClick={saveCustomer}><Plus size={17} /> {editingId ? 'Update customer' : 'Add customer'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DailyDataPage({ rows }) {
  const [filters, setFilters] = useState({ date: today(), type: '', source: '', search: '' });
  const filtered = filterRows(rows, filters, 'day');
  return (
    <ReportPage
      title="Daily Data List"
      description="All sale rows for the selected day."
      rows={filtered}
      filters={filters}
      setFilters={setFilters}
      mode="day"
      filename="plant-zone-daily-data"
    />
  );
}

function MonthlyDataPage({ rows, invoices }) {
  const [filters, setFilters] = useState({ month: monthNow(), type: '', source: '', search: '' });
  const filtered = filterRows(rows, filters, 'month');
  const invoiceIds = new Set(filtered.map((row) => row.invoice_no));
  const sourceTotals = sources.map((source) => ({
    source,
    total: filtered.filter((row) => row.customer_source === source).reduce((sum, row) => sum + row.sale_amount, 0),
  }));
  const bestPlant = bestBy(filtered, 'plant_name');
  const topSource = sourceTotals.slice().sort((a, b) => b.total - a.total)[0]?.source || '-';
  const totalSales = filtered.reduce((sum, row) => sum + row.sale_amount, 0);
  const totalProfit = filtered.reduce((sum, row) => sum + row.profit, 0);
  const monthlyInvoices = invoices.filter((invoice) => invoice.sale_date.startsWith(filters.month));

  return (
    <section className="report-layout">
      <div className="summary-grid reveal">
        <MetricCard label="Total sales" value={money(totalSales)} />
        <MetricCard label="Total profit" value={money(totalProfit)} />
        <MetricCard label="Invoice count" value={invoiceIds.size || monthlyInvoices.length} />
        <MetricCard label="Best-selling plant" value={bestPlant || '-'} />
        <MetricCard label="Top source" value={topSource} />
      </div>
      <div className="panel reveal source-breakdown">
        <div className="panel-title-row">
          <div><h2>Source Breakdown</h2><p>Monthly source report for Facebook, TikTok, Viber, and Phone.</p></div>
        </div>
        <div className="source-bars">
          {sourceTotals.map((item) => {
            const percent = totalSales ? Math.round((item.total / totalSales) * 100) : 0;
            return (
              <div className="source-bar" key={item.source}>
                <span>{item.source}</span>
                <div><i style={{ width: `${percent}%` }} /></div>
                <strong>{money(item.total)}</strong>
              </div>
            );
          })}
        </div>
      </div>
      <ReportPage
        title="Monthly Data List"
        description="A separate monthly report page for permission-based navigation later."
        rows={filtered}
        filters={filters}
        setFilters={setFilters}
        mode="month"
        filename="plant-zone-monthly-data"
      />
    </section>
  );
}

function ReportPage({ title, description, rows, filters, setFilters, mode, filename }) {
  return (
    <section className="panel reveal">
      <div className="panel-title-row report-title-row">
        <div><h2>{title}</h2><p>{description}</p></div>
        <div className="export-actions">
          <button className="ghost-button" onClick={() => exportRows(filename, rows, 'csv')}><Download size={17} /> CSV</button>
          <button className="ghost-button" onClick={() => exportRows(filename, rows, 'xls')}><FileSpreadsheet size={17} /> Excel</button>
          <button className="ghost-button" onClick={() => window.print()}><Printer size={17} /> PDF</button>
        </div>
      </div>
      <div className="filter-grid">
        {mode === 'day' ? (
          <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
        ) : (
          <label>Month<input type="month" value={filters.month} onChange={(event) => setFilters({ ...filters, month: event.target.value })} /></label>
        )}
        <label>Plant type<select value={filters.type} onChange={(event) => setFilters({ ...filters, type: event.target.value })}><option value="">All</option>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>Source<select value={filters.source} onChange={(event) => setFilters({ ...filters, source: event.target.value })}><option value="">All</option>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
        <label>Keyword<input value={filters.search} onChange={(event) => setFilters({ ...filters, search: event.target.value })} placeholder="Plant, code, customer" /></label>
      </div>
      <DataTable rows={rows} />
    </section>
  );
}

function DataTable({ rows }) {
  const columns = [
    ['date', 'Date'],
    ['invoice_no', 'Invoice'],
    ['plant_name', 'Plant name'],
    ['plant_code', 'Code'],
    ['plant_type', 'Type'],
    ['size', 'Size'],
    ['quantity', 'Qty'],
    ['unit_price', 'Unit price'],
    ['ws_price', 'WS price'],
    ['customer_name', 'Customer'],
    ['customer_phone', 'Phone'],
    ['customer_address', 'Address'],
    ['customer_source', 'Source'],
    ['sale_amount', 'Sale amount'],
    ['profit', 'Profit'],
  ];

  return (
    <div className="table-wrap report-table">
      <table>
        <thead>
          <tr>{columns.map(([, label]) => <th key={label}>{label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.invoice_no}-${row.plant_code}-${index}`}>
              {columns.map(([key]) => (
                <td key={key}>{['unit_price', 'ws_price', 'sale_amount', 'profit'].includes(key) ? money(row[key]) : row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <div className="empty-state">No rows match the current filters.</div>}
    </div>
  );
}

function MetricCard({ icon, label, value, detail }) {
  return (
    <article className="metric-card">
      <span className="metric-label">{label}{icon}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </article>
  );
}

function ExportCenterPage({ rows, invoices }) {
  return (
    <section className="panel reveal export-center">
      <div className="panel-title-row">
        <div className="panel-title">
          <FileOutput size={20} />
          <div><h2>Export Center</h2><p>Fast exports for cashier handoff, daily books, and monthly review.</p></div>
        </div>
      </div>
      <div className="export-tile-grid">
        <button className="export-tile" onClick={() => exportRows('plant-zone-all-sales', rows, 'xls')}>
          <FileSpreadsheet size={22} />
          <strong>All Sales Excel</strong>
          <span>{rows.length} item rows</span>
        </button>
        <button className="export-tile" onClick={() => exportRows('plant-zone-all-sales', rows, 'csv')}>
          <Download size={22} />
          <strong>All Sales CSV</strong>
          <span>Spreadsheet-ready CSV</span>
        </button>
        <button className="export-tile" onClick={() => window.print()}>
          <Printer size={22} />
          <strong>PDF / Print</strong>
          <span>{invoices.length} invoice records</span>
        </button>
      </div>
    </section>
  );
}

function SettingsPage() {
  return (
    <section className="panel reveal settings-page">
      <div className="panel-title-row">
        <div className="panel-title">
          <Settings size={20} />
          <div><h2>Settings</h2><p>Plant Zone business defaults for future database and permission setup.</p></div>
        </div>
      </div>
      <div className="settings-grid">
        <label>Business name<input value="Plant Zone" readOnly /></label>
        <label>Business type<input value="Garden Center" readOnly /></label>
        <label>Location<input value="Pyay, Bago Region, Myanmar" readOnly /></label>
        <label>Phone<input value="+95 9 756 040646" readOnly /></label>
        <label>Default payment method<input value="Cash" readOnly /></label>
        <label>Monthly report permission<input value="Separate navigation page" readOnly /></label>
      </div>
    </section>
  );
}

function flattenInvoiceRows(invoices) {
  return invoices.flatMap((invoice) => invoice.items.map((item) => ({
    date: invoice.sale_date,
    invoice_no: invoice.invoice_no,
    plant_name: item.plant_name,
    plant_code: item.plant_code,
    plant_type: item.plant_type,
    size: item.size,
    quantity: item.quantity,
    unit_price: item.unit_price,
    ws_price: item.ws_price,
    customer_name: invoice.customer.cus_name,
    customer_phone: invoice.customer.cus_ph,
    customer_address: invoice.customer.cus_address,
    customer_source: invoice.customer.source,
    sale_amount: item.sale_amount,
    profit: item.profit_amount,
  })));
}

function filterRows(rows, filters, mode) {
  return rows.filter((row) => {
    const dateMatch = mode === 'day' ? row.date === filters.date : row.date.startsWith(filters.month);
    const typeMatch = !filters.type || row.plant_type === filters.type;
    const sourceMatch = !filters.source || row.customer_source === filters.source;
    const searchMatch = !filters.search || [row.plant_name, row.plant_code, row.customer_name, row.customer_phone].some((value) => clean(value).includes(clean(filters.search)));
    return dateMatch && typeMatch && sourceMatch && searchMatch;
  });
}

function exportRows(filename, rows, type) {
  const headers = ['date', 'invoice_no', 'plant_name', 'plant_code', 'plant_type', 'size', 'quantity', 'unit_price', 'ws_price', 'customer_name', 'customer_phone', 'customer_address', 'customer_source', 'sale_amount', 'profit'];
  if (type === 'xls') {
    const tableRows = rows.map((row) => `<tr>${headers.map((header) => `<td>${row[header] ?? ''}</td>`).join('')}</tr>`).join('');
    download(`${filename}.xls`, `application/vnd.ms-excel`, `<table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${tableRows}</tbody></table>`);
    return;
  }
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? '').replaceAll('"', '""')}"`).join(',')),
  ].join('\n');
  download(`${filename}.csv`, 'text/csv;charset=utf-8', csv);
}

function download(filename, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function shareText(text) {
  if (navigator.share) {
    navigator.share({ title: 'Plant Zone POS', text }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(text);
    alert('Invoice record copied for sharing.');
  }
}

function bestBy(rows, key) {
  const totals = rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + Number(row.quantity || 1);
    return acc;
  }, {});
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
}

export default App;
