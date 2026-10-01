import { useState } from 'react';
import { PurchaseList } from './Modules/PurchaseOrder/Purchaselist';
import { CreatePurchase } from './Modules/PurchaseOrder/CreatePurchaseOrder';
import { Layout } from './Components/Layout';

function App() {
  // 1. Create a state to manage which tab is active ('list' or 'create')
  const [activeTab, setActiveTab] = useState<'list' | 'create'>('list');

  // 2. Mock or fetch an order count (e.g., 5 orders)
  const orderCount = 5; 

  return (
    <Layout 
      activeTab={activeTab} 
      onSelectTab={setActiveTab} 
      orderCount={orderCount}
    >
      {/* 3. Conditionally render the correct screen based on the active tab */}
      {activeTab === 'create' ? <CreatePurchase /> : <PurchaseList />}
    </Layout>
  );
}

export default App;
