import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneFrame } from './components/PhoneFrame';
import { CoverPage } from './components/screens/CoverPage';
import { HomePage } from './components/screens/HomePage';
import { RestaurantList } from './components/screens/RestaurantList';
import { RestaurantDetails } from './components/screens/RestaurantDetails';
import { CartScreen } from './components/screens/CartScreen';
import { CheckoutScreen } from './components/screens/CheckoutScreen';
import { OrderConfirmation } from './components/screens/OrderConfirmation';
import { CouponWallet } from './components/screens/CouponWallet';
import { OrderStatus } from './components/screens/OrderStatus';
import { ComponentLibrary } from './components/screens/ComponentLibrary';
import { HandoffNotes } from './components/screens/HandoffNotes';
import { FindSeatScreen } from './components/screens/FindSeatScreen';

type Screen = 
  | 'cover' 
  | 'home' 
  | 'restaurants' 
  | 'restaurant-details' 
  | 'cart' 
  | 'checkout' 
  | 'confirmation' 
  | 'coupons' 
  | 'order-status'
  | 'find-seat'
  | 'components'
  | 'handoff';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('cover');
  const [history, setHistory] = useState<Screen[]>(['cover']);
  const [showNav, setShowNav] = useState(true);

  const navigateTo = (screen: Screen) => {
    setHistory([...history, currentScreen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousScreen = newHistory.pop() || 'cover';
      setHistory(newHistory);
      setCurrentScreen(previousScreen);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20, filter: 'blur(10px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: -20, filter: 'blur(10px)' }
  };

  return (
    <PhoneFrame>
      <div className="min-h-full bg-[var(--dark-bg)] font-['Inter']">
        {/* Mobile Container - Optimized for 393px */}
        <div className="w-full h-full bg-[var(--dark-bg)] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {currentScreen === 'cover' && (
                <CoverPage onEnter={() => navigateTo('home')} onNavigate={navigateTo} />
              )}
              
              {currentScreen === 'home' && (
                <HomePage onNavigate={navigateTo} />
              )}
              
              {currentScreen === 'restaurants' && (
                <RestaurantList onNavigate={navigateTo} onBack={goBack} />
              )}
              
              {currentScreen === 'restaurant-details' && (
                <RestaurantDetails onNavigate={navigateTo} onBack={goBack} />
              )}
              
              {currentScreen === 'cart' && (
                <CartScreen onNavigate={navigateTo} onBack={goBack} />
              )}
              
              {currentScreen === 'checkout' && (
                <CheckoutScreen onNavigate={navigateTo} onBack={goBack} />
              )}
              
              {currentScreen === 'confirmation' && (
                <OrderConfirmation onNavigate={navigateTo} />
              )}
              
              {currentScreen === 'coupons' && (
                <CouponWallet onBack={goBack} />
              )}
              
              {currentScreen === 'order-status' && (
                <OrderStatus onBack={goBack} />
              )}
              
              {currentScreen === 'components' && (
                <ComponentLibrary onBack={goBack} />
              )}
              
              {currentScreen === 'handoff' && (
                <HandoffNotes onBack={goBack} />
              )}
              
              {currentScreen === 'find-seat' && (
                <FindSeatScreen onBack={goBack} onNavigate={navigateTo} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Dev Navigation Overlay (for testing) */}
        {showNav ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-4 z-50 bg-black/90 backdrop-blur-sm rounded-lg p-3 text-xs text-white border border-white/20 max-w-[340px]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-['JetBrains_Mono'] text-[var(--neon-cyan)]">
                Navigation
              </div>
              <button
                onClick={() => setShowNav(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-wrap gap-1">
              {(['cover', 'home', 'restaurants', 'restaurant-details', 'cart', 'checkout', 'confirmation', 'coupons', 'order-status', 'find-seat', 'components', 'handoff'] as Screen[]).map((screen) => (
                <button
                  key={screen}
                  onClick={() => navigateTo(screen)}
                  className={`px-2 py-1 rounded text-[10px] ${
                    currentScreen === screen
                      ? 'bg-[var(--neon-magenta)] text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {screen}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowNav(true)}
            className="fixed bottom-4 left-4 z-50 w-10 h-10 bg-[var(--neon-cyan)] rounded-full flex items-center justify-center shadow-[0_0_16px_var(--neon-cyan)] hover:shadow-[0_0_24px_var(--neon-cyan)] transition-all"
          >
            <span className="text-[var(--dark-bg)] font-['JetBrains_Mono']">☰</span>
          </motion.button>
        )}
      </div>
    </PhoneFrame>
  );
}