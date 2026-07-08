import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  BarChart3,
  BadgeDollarSign,
  Banknote,
  Bell,
  Blocks,
  CalendarDays,
  CheckCircle2,
  Clock,
  Database,
  Download,
  Edit3,
  FileSpreadsheet,
  FileText,
  FileOutput,
  Filter,
  Leaf,
  MapPin,
  Menu,
  Megaphone,
  Minus,
  Package,
  Plus,
  Printer,
  RadioTower,
  ReceiptText,
  Search,
  Send,
  Settings,
  ShoppingCart,
  ScanBarcode,
  Sprout,
  Store,
  Trash2,
  TrendingUp,
  TriangleAlert,
  Truck,
  User,
  Users,
} from 'lucide-react';

const sources = ['Facebook', 'TikTok', 'Viber', 'Phone'];
const categories = ['All', 'Indoor', 'Outdoor', 'Succulent', 'Cactus', 'Flowers', 'Decorative', 'Garden Center', 'Landscaping'];
const paymentStatuses = ['Paid', 'Pending', 'Partial'];
const plantTypes = ['Indoor', 'Outdoor', 'Succulent', 'Cactus', 'Flowers', 'Decorative', 'Garden Center', 'Landscaping'];

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
  { id: 'pos', label: 'POS Sale', icon: ScanBarcode, group: 'Selling' },
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

function BotanicalScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mount = mountRef.current;
    if (!mount || prefersReduced) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 1.6);
    light.position.set(2, 4, 5);
    scene.add(light);

    const group = new THREE.Group();
    scene.add(group);

    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(0.55, 0.25, 0.55, 1.1, 0, 1.55);
    leafShape.bezierCurveTo(-0.55, 1.1, -0.55, 0.25, 0, 0);

    const materials = [
      new THREE.MeshStandardMaterial({ color: '#2E7D32', roughness: 0.65, metalness: 0.02 }),
      new THREE.MeshStandardMaterial({ color: '#6B8E23', roughness: 0.75, metalness: 0.01 }),
      new THREE.MeshStandardMaterial({ color: '#A7C957', roughness: 0.7, metalness: 0.01 }),
    ];

    Array.from({ length: 18 }).forEach((_, index) => {
      const geometry = new THREE.ShapeGeometry(leafShape);
      const mesh = new THREE.Mesh(geometry, materials[index % materials.length]);
      mesh.position.set((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 3.8, (Math.random() - 0.5) * 2);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const scale = 0.22 + Math.random() * 0.22;
      mesh.scale.set(scale, scale, scale);
      mesh.userData = { speed: 0.003 + Math.random() * 0.007, drift: Math.random() * Math.PI * 2 };
      group.add(mesh);
    });

    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.045, 4.4, 16),
      new THREE.MeshStandardMaterial({ color: '#355E3B', roughness: 0.8 }),
    );
    stem.rotation.z = 0.55;
    stem.position.set(-1.8, -0.15, -0.4);
    group.add(stem);

    const pot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.82, 0.75, 32),
      new THREE.MeshStandardMaterial({ color: '#EFE7DA', roughness: 0.55 }),
    );
    pot.position.set(-2.3, -1.45, 0.1);
    group.add(pot);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      camera.aspect = Math.max(clientWidth, 1) / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    resize();
    window.addEventListener('resize', resize);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.002;
      group.children.forEach((child) => {
        if (child.userData.speed) {
          child.rotation.z += child.userData.speed;
          child.position.y += Math.sin(Date.now() * child.userData.speed * 0.25 + child.userData.drift) * 0.0018;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      materials.forEach((material) => material.dispose());
      group.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="botanical-scene" aria-hidden="true" />;
}

function App() {
  const [activePage, setActivePage] = useState('pos');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [plants, setPlants] = usePersistentState('plant-zone-plants', samplePlants);
  const [customers, setCustomers] = usePersistentState('plant-zone-customers', sampleCustomers);
  const [invoices, setInvoices] = usePersistentState('plant-zone-invoices', sampleInvoices);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [customerDraft, setCustomerDraft] = useState({ cus_name: '', cus_address: '', cus_ph: '', source: 'Facebook' });
  const [paymentDraft, setPaymentDraft] = useState({ payment_status: 'Paid', payment_method: 'Cash' });

  const rows = useMemo(() => flattenInvoiceRows(invoices), [invoices]);

  const nextInvoiceNo = useMemo(() => {
    const dateKey = today().replaceAll('-', '');
    const todaysCount = invoices.filter((invoice) => invoice.invoice_no.includes(dateKey)).length + 1;
    return `PZ-${dateKey}-${String(todaysCount).padStart(3, '0')}`;
  }, [invoices]);

  const cartTotals = useMemo(() => cart.reduce(
    (acc, item) => {
      acc.subtotal += item.unit_price * item.cartQty;
      acc.wholesale += item.ws_price * item.cartQty;
      acc.profit += (item.unit_price - item.ws_price) * item.cartQty;
      return acc;
    },
    { subtotal: 0, wholesale: 0, profit: 0 },
  ), [cart]);

  const addToCart = (plant) => {
    if (plant.quantity <= 0) return;
    setCart((current) => {
      const existing = current.find((item) => item.id === plant.id);
      if (existing) {
        return current.map((item) => (
          item.id === plant.id ? { ...item, cartQty: Math.min(item.cartQty + 1, plant.quantity) } : item
        ));
      }
      return [...current, { ...plant, cartQty: 1 }];
    });
  };

  const updateCartQty = (plantId, delta) => {
    setCart((current) => current
      .map((item) => (item.id === plantId ? { ...item, cartQty: Math.max(0, Math.min(item.cartQty + delta, item.quantity)) } : item))
      .filter((item) => item.cartQty > 0));
  };

  const completeSale = () => {
    if (!cart.length || !customerDraft.cus_name.trim()) return;
    const customerId = Date.now();
    const customer = {
      id: customerId,
      ...customerDraft,
      created_at: today(),
      updated_at: today(),
    };
    const items = cart.map((item) => ({
      plant_id: item.id,
      plant_name: item.plant_name,
      plant_code: item.plant_code,
      plant_type: item.plant_type,
      size: item.size,
      quantity: item.cartQty,
      unit_price: item.unit_price,
      ws_price: item.ws_price,
      sale_amount: item.unit_price * item.cartQty,
      profit_amount: (item.unit_price - item.ws_price) * item.cartQty,
    }));
    const invoice = {
      id: Date.now(),
      invoice_no: nextInvoiceNo,
      customer,
      sale_date: today(),
      payment_status: paymentDraft.payment_status,
      payment_method: paymentDraft.payment_method,
      subtotal: cartTotals.subtotal,
      wholesale_total: cartTotals.wholesale,
      profit_total: cartTotals.profit,
      sale_amount: cartTotals.subtotal,
      items,
      created_at: new Date().toISOString(),
    };

    setInvoices((current) => [invoice, ...current]);
    setCustomers((current) => upsertCustomer(current, customer));
    setPlants((current) => current.map((plant) => {
      const sold = cart.find((item) => item.id === plant.id);
      return sold ? { ...plant, quantity: Math.max(0, plant.quantity - sold.cartQty), updated_at: today() } : plant;
    }));
    setCart([]);
    setCustomerDraft({ cus_name: '', cus_address: '', cus_ph: '', source: customerDraft.source });
  };

  const completeSaleDisabled = !cart.length || !customerDraft.cus_name.trim();
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
        <div className="profile-mini">
          <div className="profile-cover" />
          <div className="profile-body">
            <p>Indoor plants, outdoor plants, cactus, flowers, delivery, reservations, and landscaping service.</p>
            <span><PhoneIcon /> +95 9 756 040646</span>
            <span><MapPin size={15} /> Pyay, Bago Region</span>
            <span><Clock size={15} /> Always open</span>
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
        <Header activePage={activePage} onMenu={() => setSidebarOpen(true)} />
        {activePage === 'pos' && (
          <PosPage
            plants={plants}
            rows={todayRows}
            invoices={invoices}
            monthlyRows={monthlyRows}
            query={query}
            setQuery={setQuery}
            category={category}
            setCategory={setCategory}
            addToCart={addToCart}
            cart={cart}
            updateCartQty={updateCartQty}
            customerDraft={customerDraft}
            setCustomerDraft={setCustomerDraft}
            paymentDraft={paymentDraft}
            setPaymentDraft={setPaymentDraft}
            cartTotals={cartTotals}
            invoiceNo={nextInvoiceNo}
            completeSale={completeSale}
            completeSaleDisabled={completeSaleDisabled}
          />
        )}
        {activePage === 'invoices' && <InvoicesPage invoices={invoices} setInvoices={setInvoices} />}
        {activePage === 'stock' && <StockPage plants={plants} setPlants={setPlants} />}
        {activePage === 'customers' && <CustomersPage customers={customers} invoices={invoices} />}
        {activePage === 'daily' && <DailyDataPage rows={rows} />}
        {activePage === 'monthly' && <MonthlyDataPage rows={rows} invoices={invoices} />}
        {activePage === 'export' && <ExportCenterPage rows={rows} invoices={invoices} />}
        {activePage === 'settings' && <SettingsPage />}
      </main>
    </div>
  );
}

function PhoneIcon() {
  return <span className="phone-dot" aria-hidden="true">09</span>;
}

function Header({ activePage, onMenu }) {
  const page = navItems.find((item) => item.id === activePage);
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
      <section className="hero">
        <BotanicalScene />
        <div className="hero-content">
          <div>
            <p className="eyebrow">Plant Zone Garden Center</p>
            <h1>{activePage === 'pos' ? 'Plant Zone Garden Center POS' : page?.label || 'POS Sale'}</h1>
            <p className="hero-copy">A modern POS for plant sales, social media customers, delivery orders, reservations, landscaping service, invoices, and export-ready daily/monthly data.</p>
            <div className="hero-actions">
              <button className="primary-button"><Plus size={17} /> New Invoice</button>
              <button className="soft-button"><FileSpreadsheet size={17} /> Export Today</button>
              <button className="soft-button"><Truck size={17} /> Delivery Order</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PosPage({
  plants,
  rows,
  invoices,
  monthlyRows,
  query,
  setQuery,
  category,
  setCategory,
  addToCart,
  cart,
  updateCartQty,
  customerDraft,
  setCustomerDraft,
  paymentDraft,
  setPaymentDraft,
  cartTotals,
  invoiceNo,
  completeSale,
  completeSaleDisabled,
}) {
  const visiblePlants = useMemo(() => plants.filter((plant) => {
    const matchesSearch = [plant.plant_name, plant.plant_code, plant.plant_type].some((value) => clean(value).includes(clean(query)));
    const matchesCategory = category === 'All' || plant.plant_type === category;
    return matchesSearch && matchesCategory;
  }), [plants, query, category]);
  const [saleDraft, setSaleDraft] = useState({
    plant_code: '',
    plant_name: '',
    plant_type: 'Indoor',
    size: 'M',
    quantity: 1,
    unit_price: 0,
    ws_price: 0,
    source: 'Facebook',
  });
  const todaySales = rows.reduce((sum, row) => sum + row.sale_amount, 0);
  const monthlySales = monthlyRows.reduce((sum, row) => sum + row.sale_amount, 0);
  const todayProfit = rows.reduce((sum, row) => sum + row.profit, 0);
  const lowStock = plants.filter((plant) => plant.quantity <= plant.low_stock_limit).length;
  const topSource = bestBy(rows.length ? rows : monthlyRows, 'customer_source') || 'Facebook';
  const sourceTotals = sources.map((source) => ({
    source,
    total: rows.filter((row) => row.customer_source === source).reduce((sum, row) => sum + row.sale_amount, 0),
  }));
  const sourceMax = Math.max(1, ...sourceTotals.map((item) => item.total));

  const addDraftToCart = () => {
    const plant = plants.find((item) => (
      clean(item.plant_code) === clean(saleDraft.plant_code)
      || clean(item.plant_name) === clean(saleDraft.plant_name)
    ));
    if (plant) addToCart(plant);
  };

  return (
    <section className="pos-dashboard">
      <div className="summary-grid reveal">
        <MetricCard icon={<Banknote size={18} />} label="Today Sales" value={money(todaySales)} detail={`${new Set(rows.map((row) => row.invoice_no)).size} invoices`} />
        <MetricCard icon={<TrendingUp size={18} />} label="Monthly Sales" value={money(monthlySales)} detail="July 2026" />
        <MetricCard icon={<BadgeDollarSign size={18} />} label="Profit" value={money(todayProfit)} detail="WS price tracked" />
        <MetricCard icon={<TriangleAlert size={18} />} label="Low Stock" value={lowStock} detail="need refill" />
        <MetricCard icon={<Megaphone size={18} />} label="Top Source" value={topSource} detail="social order mix" />
      </div>

      <div className="page-grid pos-grid workbench">
        <div className="panel reveal catalog-panel">
          <div className="panel-title-row">
            <div className="panel-title">
              <ShoppingCart size={20} />
              <div>
                <h2>Smart Sale Entry</h2>
                <p>Use exact plant, customer, source, price, and invoice data in one screen.</p>
              </div>
            </div>
            <button className="icon-button" aria-label="Filter catalog">
              <Filter size={18} />
            </button>
          </div>
          <div className="sale-layout">
            <div className="entry-form">
              <div className="form-grid">
                <label>Plant Code<input value={saleDraft.plant_code} onChange={(event) => setSaleDraft({ ...saleDraft, plant_code: event.target.value })} placeholder="PZ-IN-101" /></label>
                <label>Quantity<input type="number" value={saleDraft.quantity} onChange={(event) => setSaleDraft({ ...saleDraft, quantity: Number(event.target.value) })} /></label>
                <label className="span-2">Plant Name<input value={saleDraft.plant_name} onChange={(event) => setSaleDraft({ ...saleDraft, plant_name: event.target.value })} placeholder="Monstera Deliciosa" /></label>
                <label>Plant Type<select value={saleDraft.plant_type} onChange={(event) => setSaleDraft({ ...saleDraft, plant_type: event.target.value })}>{plantTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
                <label>Size<select value={saleDraft.size} onChange={(event) => setSaleDraft({ ...saleDraft, size: event.target.value })}>{['XS', 'S', 'M', 'L', 'Set', 'Order'].map((size) => <option key={size}>{size}</option>)}</select></label>
                <label>Unit Price<input type="number" value={saleDraft.unit_price} onChange={(event) => setSaleDraft({ ...saleDraft, unit_price: Number(event.target.value) })} /></label>
                <label>WS Price<input type="number" value={saleDraft.ws_price} onChange={(event) => setSaleDraft({ ...saleDraft, ws_price: Number(event.target.value) })} /></label>
                <label className="span-2">Customer Source<select value={saleDraft.source} onChange={(event) => {
                  setSaleDraft({ ...saleDraft, source: event.target.value });
                  setCustomerDraft({ ...customerDraft, source: event.target.value });
                }}>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
              </div>
              <button className="primary-button wide" type="button" onClick={addDraftToCart}>
                <Plus size={17} /> Add To Invoice
              </button>
            </div>
            <div className="catalog-area">
              <div className="toolbar">
                <label className="search-field">
                  <Search size={17} />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Monstera or PZ-IN-101" />
                </label>
                <div className="category-scroll">
                  {categories.map((item) => (
                    <button key={item} className={`chip ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="plant-grid">
                {visiblePlants.map((plant) => (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.plant_name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="plant-card-body">
                      <div>
                        <strong>{plant.plant_name}</strong>
                        <span>{plant.plant_code}</span>
                      </div>
                      <dl className="plant-meta">
                        <div><dt>Type</dt><dd>{plant.plant_type}</dd></div>
                        <div><dt>Size</dt><dd>{plant.size}</dd></div>
                        <div><dt>Qty</dt><dd className={plant.quantity <= plant.low_stock_limit ? 'danger-text' : ''}>{plant.quantity}</dd></div>
                        <div><dt>Price</dt><dd>{money(plant.unit_price)}</dd></div>
                        <div><dt>WS</dt><dd>{money(plant.ws_price)}</dd></div>
                      </dl>
                      <button className="mini-button" onClick={() => addToCart(plant)} disabled={plant.quantity <= 0} aria-label={`Add ${plant.plant_name}`}>
                        <Plus size={17} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="panel reveal invoice-builder">
        <div className="panel-title-row">
          <div className="panel-title">
            <ReceiptText size={20} />
            <div>
              <h2>Live Invoice</h2>
              <p>Print, PDF, or share after sale.</p>
            </div>
          </div>
        </div>
        <div className="invoice-paper">
          <div className="invoice-top">
            <div>
              <strong>Plant Zone</strong>
              <span>Pyay, Bago Region</span>
              <span>+95 9 756 040646</span>
            </div>
            <div className="invoice-no">
              {invoiceNo}
              <span>{today()}</span>
            </div>
          </div>
        <div className="form-grid">
          <label>Customer name<input required value={customerDraft.cus_name} onChange={(event) => setCustomerDraft({ ...customerDraft, cus_name: event.target.value })} /></label>
          <label>Phone<input value={customerDraft.cus_ph} onChange={(event) => setCustomerDraft({ ...customerDraft, cus_ph: event.target.value })} /></label>
          <label className="span-2">Address<input value={customerDraft.cus_address} onChange={(event) => setCustomerDraft({ ...customerDraft, cus_address: event.target.value })} /></label>
          <label>Source<select value={customerDraft.source} onChange={(event) => setCustomerDraft({ ...customerDraft, source: event.target.value })}>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
          <label>Status<select value={paymentDraft.payment_status} onChange={(event) => setPaymentDraft({ ...paymentDraft, payment_status: event.target.value })}>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
          <label className="span-2">Payment method<input value={paymentDraft.payment_method} onChange={(event) => setPaymentDraft({ ...paymentDraft, payment_method: event.target.value })} /></label>
        </div>
        <div className="cart-list">
          {cart.length === 0 && <div className="empty-state">Cart is ready for the next plant sale.</div>}
          {cart.map((item) => (
            <div className="cart-row" key={item.id}>
              <div>
                <strong>{item.plant_name}</strong>
                <span>{item.plant_code} - {money(item.unit_price)}</span>
              </div>
              <div className="stepper">
                <button onClick={() => updateCartQty(item.id, -1)} aria-label={`Decrease ${item.plant_name}`}><Minus size={15} /></button>
                <span>{item.cartQty}</span>
                <button onClick={() => updateCartQty(item.id, 1)} aria-label={`Increase ${item.plant_name}`}><Plus size={15} /></button>
              </div>
            </div>
          ))}
        </div>
        <Totals totals={cartTotals} />
        </div>
        <div className="action-row">
          <button className="primary-button wide" disabled={completeSaleDisabled} onClick={completeSale}>
            <CheckCircle2 size={18} /> Complete sale
          </button>
          <button className="ghost-button" onClick={() => window.print()}><Printer size={17} /> Print</button>
          <button className="ghost-button" onClick={() => shareText(`${invoiceNo} sale amount ${money(cartTotals.subtotal)}`)}><Send size={17} /> Share</button>
        </div>
      </aside>
      </div>

      <div className="data-sections">
        <div className="panel reveal">
          <div className="panel-title-row">
            <div className="panel-title">
              <Database size={20} />
              <div><h2>Daily Sales Data List</h2><p>All requested sale fields, ready for export.</p></div>
            </div>
            <div className="export-actions">
              <button className="ghost-button" onClick={() => exportRows('plant-zone-today', rows, 'xls')}><FileSpreadsheet size={17} /> Excel</button>
              <button className="ghost-button" onClick={() => window.print()}><Printer size={17} /> Print</button>
            </div>
          </div>
          <DataTable rows={rows.slice(0, 8)} />
        </div>
        <aside className="insight-stack">
          <section className="insight-card">
            <h3><RadioTower size={18} /> Customer Source</h3>
            {sourceTotals.map((item) => (
              <div className="source-row" key={item.source}>
                <span>{item.source}</span>
                <div className="bar"><i style={{ width: `${Math.max(8, Math.round((item.total / sourceMax) * 100))}%` }} /></div>
                <b>{money(item.total)}</b>
              </div>
            ))}
          </section>
          <section className="insight-card">
            <h3><Blocks size={18} /> Data Structure</h3>
            {['Plants: name, code, type, size, qty, unit, WS', 'Customers: name, phone, address, source', 'Invoices: invoice no, date, payment, sale amount', 'Reports: daily list, monthly list, source totals'].map((line) => (
              <div className="data-pill" key={line}><Leaf size={17} /><span>{line}</span></div>
            ))}
          </section>
          <section className="insight-card">
            <h3><FileOutput size={18} /> Extract Functions</h3>
            <div className="export-grid">
              <button className="export-button" onClick={() => exportRows('plant-zone-daily-data', rows, 'xls')}><span><strong>Daily Excel</strong><small>Selected day rows</small></span><Download size={16} /></button>
              <button className="export-button" onClick={() => exportRows('plant-zone-monthly-data', monthlyRows, 'xls')}><span><strong>Monthly Excel</strong><small>Grouped report rows</small></span><Download size={16} /></button>
              <button className="export-button" onClick={() => window.print()}><span><strong>Invoice PDF</strong><small>Print or share</small></span><Printer size={16} /></button>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}

function Totals({ totals }) {
  return (
    <div className="totals">
      <div><span>Subtotal</span><strong>{money(totals.subtotal)}</strong></div>
      <div><span>Wholesale cost</span><strong>{money(totals.wholesale)}</strong></div>
      <div><span>Estimated profit</span><strong>{money(totals.profit)}</strong></div>
      <div className="grand-total"><span>Sale amount</span><strong>{money(totals.subtotal)}</strong></div>
    </div>
  );
}

function InvoicesPage({ invoices, setInvoices }) {
  const [filters, setFilters] = useState({ date: '', customer: '', status: '', source: '' });
  const [selectedId, setSelectedId] = useState(invoices[0]?.id ?? null);
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

  return (
    <section className="page-grid invoice-page-grid">
      <div className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Invoices</h2><p>Filter by date, customer, status, and source.</p></div>
          <button className="ghost-button" onClick={() => exportRows('plant-zone-invoices', flattenInvoiceRows(filtered), 'csv')}><Download size={17} /> CSV</button>
        </div>
        <div className="filter-grid">
          <label>Date<input type="date" value={filters.date} onChange={(event) => setFilters({ ...filters, date: event.target.value })} /></label>
          <label>Customer<input value={filters.customer} onChange={(event) => setFilters({ ...filters, customer: event.target.value })} placeholder="Customer name" /></label>
          <label>Status<select value={filters.status} onChange={(event) => setFilters({ ...filters, status: event.target.value })}><option value="">All</option>{paymentStatuses.map((status) => <option key={status}>{status}</option>)}</select></label>
          <label>Source<select value={filters.source} onChange={(event) => setFilters({ ...filters, source: event.target.value })}><option value="">All</option>{sources.map((source) => <option key={source}>{source}</option>)}</select></label>
        </div>
        <div className="list-stack">
          {filtered.map((invoice) => (
            <button key={invoice.id} className={`invoice-row ${selected?.id === invoice.id ? 'active' : ''}`} onClick={() => setSelectedId(invoice.id)}>
              <span><strong>{invoice.invoice_no}</strong><small>{invoice.customer.cus_name} - {invoice.customer.source}</small></span>
              <span><strong>{money(invoice.sale_amount)}</strong><small>{invoice.payment_status}</small></span>
            </button>
          ))}
        </div>
      </div>
      <InvoiceDetail invoice={selected} onDelete={(id) => setInvoices((current) => current.filter((invoice) => invoice.id !== id))} />
    </section>
  );
}

function InvoiceDetail({ invoice, onDelete }) {
  if (!invoice) return <div className="panel empty-state">No invoices yet.</div>;
  return (
    <aside className="panel reveal invoice-detail printable">
      <div className="panel-title-row">
        <div><h2>{invoice.invoice_no}</h2><p>{invoice.sale_date} - {invoice.payment_method}</p></div>
        <div className="icon-actions">
          <button className="icon-button" onClick={() => window.print()} aria-label="Print invoice"><Printer size={18} /></button>
          <button className="icon-button" onClick={() => printPdf()} aria-label="Export invoice PDF"><FileText size={18} /></button>
          <button className="icon-button" onClick={() => shareText(`${invoice.invoice_no} - ${invoice.customer.cus_name} - ${money(invoice.sale_amount)}`)} aria-label="Share invoice"><Send size={18} /></button>
          <button className="icon-button danger" onClick={() => onDelete(invoice.id)} aria-label="Delete invoice"><Trash2 size={18} /></button>
        </div>
      </div>
      <div className="customer-summary">
        <strong>{invoice.customer.cus_name}</strong>
        <span>{invoice.customer.cus_ph}</span>
        <span>{invoice.customer.cus_address}</span>
        <small>{invoice.customer.source} - {invoice.payment_status}</small>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Plant</th><th>Code</th><th>Qty</th><th>Unit</th><th>Total</th></tr></thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={`${invoice.id}-${item.plant_code}`}>
                <td>{item.plant_name}</td>
                <td>{item.plant_code}</td>
                <td>{item.quantity}</td>
                <td>{money(item.unit_price)}</td>
                <td>{money(item.sale_amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Totals totals={{ subtotal: invoice.subtotal, wholesale: invoice.wholesale_total, profit: invoice.profit_total }} />
    </aside>
  );
}

function StockPage({ plants, setPlants }) {
  const emptyPlant = { plant_name: '', plant_code: '', plant_type: 'Indoor', size: 'M', quantity: 0, unit_price: 0, ws_price: 0, low_stock_limit: 5, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80' };
  const [draft, setDraft] = useState(emptyPlant);
  const [editingId, setEditingId] = useState(null);
  const [history, setHistory] = usePersistentState('plant-zone-stock-history', [
    { id: 1, date: '2026-07-08', plant_name: 'Monstera Deliciosa', type: 'Stock out', quantity: 2 },
    { id: 2, date: '2026-07-06', plant_name: 'Ceramic Pot Set', type: 'Stock in', quantity: 20 },
  ]);

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
  };

  return (
    <section className="page-grid stock-grid">
      <div className="panel reveal">
        <div className="panel-title-row">
          <div><h2>Plant Stock</h2><p>Add, edit, delete, and watch low-stock plants.</p></div>
          <Settings size={20} />
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
          <button className="primary-button span-2" onClick={savePlant}><Plus size={17} /> {editingId ? 'Update plant' : 'Add plant'}</button>
        </div>
      </div>
      <div className="panel reveal">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Name</th><th>Code</th><th>Type</th><th>Size</th><th>Qty</th><th>Unit</th><th>WS</th><th>Actions</th></tr></thead>
            <tbody>
              {plants.map((plant) => (
                <tr key={plant.id} className={plant.quantity <= plant.low_stock_limit ? 'low-stock' : ''}>
                  <td>{plant.plant_name}</td>
                  <td>{plant.plant_code}</td>
                  <td>{plant.plant_type}</td>
                  <td>{plant.size}</td>
                  <td>{plant.quantity}</td>
                  <td>{money(plant.unit_price)}</td>
                  <td>{money(plant.ws_price)}</td>
                  <td>
                    <div className="icon-actions">
                      <button className="icon-button" onClick={() => { setDraft(plant); setEditingId(plant.id); }} aria-label={`Edit ${plant.plant_name}`}><Edit3 size={16} /></button>
                      <button className="icon-button danger" onClick={() => setPlants((current) => current.filter((item) => item.id !== plant.id))} aria-label={`Delete ${plant.plant_name}`}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Stock in/out history</h3>
        <div className="mini-history">
          {history.map((entry) => (
            <span key={entry.id}>{entry.date} - {entry.type} - {entry.plant_name} - {entry.quantity}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomersPage({ customers, invoices }) {
  const [source, setSource] = useState('');
  const filtered = source ? customers.filter((customer) => customer.source === source) : customers;

  return (
    <section className="panel reveal">
      <div className="panel-title-row">
        <div><h2>Customers</h2><p>Saved automatically from completed sales.</p></div>
        <label className="compact-select">Source <select value={source} onChange={(event) => setSource(event.target.value)}><option value="">All</option>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <div className="customer-grid">
        {filtered.map((customer) => {
          const related = invoices.filter((invoice) => invoice.customer.cus_ph === customer.cus_ph || invoice.customer.cus_name === customer.cus_name);
          const total = related.reduce((sum, invoice) => sum + invoice.sale_amount, 0);
          const lastDate = related.map((invoice) => invoice.sale_date).sort().at(-1) || customer.updated_at;
          return (
            <article className="customer-card" key={customer.id}>
              <div className="avatar">{customer.cus_name.slice(0, 1).toUpperCase()}</div>
              <strong>{customer.cus_name}</strong>
              <span>{customer.cus_ph}</span>
              <small>{customer.cus_address}</small>
              <div className="customer-metrics">
                <div><span>Total purchases</span><strong>{money(total)}</strong></div>
                <div><span>Last purchase</span><strong>{lastDate}</strong></div>
              </div>
              <span className="source-pill">{customer.source}</span>
            </article>
          );
        })}
      </div>
    </section>
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

function printPdf() {
  window.print();
}

function upsertCustomer(customers, customer) {
  const existing = customers.find((item) => item.cus_ph && item.cus_ph === customer.cus_ph);
  if (!existing) return [customer, ...customers];
  return customers.map((item) => (item.id === existing.id ? { ...item, ...customer, id: existing.id, updated_at: today() } : item));
}

function bestBy(rows, key) {
  const totals = rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + Number(row.quantity || 1);
    return acc;
  }, {});
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
}

export default App;
