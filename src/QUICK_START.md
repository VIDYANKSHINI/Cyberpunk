# Quick Start Guide

## 🚀 Getting Started

The Cyberpunk Food Festival app is ready to use! Simply open the app and you'll be greeted with the Cover Page.

## 📱 Navigation

### Using the App

1. **Cover Page** - Click "Enter Festival" to start the main experience
2. **Browse** - Use buttons and cards to navigate naturally through screens
3. **Back Button** - Click the arrow (←) in headers to go back
4. **Dev Navigation** - Use the bottom-left panel to jump to any screen

### Dev Navigation Panel

- **Show/Hide**: Click the cyan button (☰) to toggle the panel
- **Quick Jump**: Click any screen name to navigate directly
- **Current Screen**: Highlighted in magenta

## 🎨 Exploring the Design System

### View Components
1. From Cover Page → Click "Components"
2. Browse all reusable components with live examples

### View Design Specs
1. From Cover Page → Click "Handoff"
2. See complete design documentation and tokens

## 📋 Complete User Flow

### Happy Path (Full Ordering Flow)
```
1. Cover Page → Click "Enter Festival"
2. Home Page → Click "Order Now"
3. Restaurant List → Select a restaurant
4. Restaurant Details → Add items to cart
5. Cart Screen → Apply coupon "CYBER100" → Proceed
6. Checkout → Select address & payment → Place Order
7. Order Confirmation → Track Order
8. Order Status → Watch live progress
```

### Alternative Flows

**Browse Coupons**
```
Home → View Coupons → Browse available coupons
```

**Quick Cart Access**
```
Any screen with cart icon → Direct to cart
```

## 🎯 Key Features to Try

### 1. Interactive Components
- **Buttons**: Hover and click to see scale animations
- **Cards**: Tap to see glow effects
- **Chips**: Toggle filters on Restaurant List

### 2. Animations
- **Page Transitions**: Smooth fade + slide between screens
- **Progress Bar**: Auto-animating on Order Status
- **Glowing Effects**: Pulsing shadows on active elements

### 3. Form Interactions
- **Coupon Entry**: Type "CYBER100" in cart
- **Quantity Controls**: Add/remove items in cart
- **Radio Buttons**: Select address and payment options

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Neon Cyan & Magenta
- **Accents**: Pink, Blue, Lime, Purple
- **Background**: Deep dark (#0a0a0f)

### Typography
- **Headings**: JetBrains Mono (cyberpunk tech vibe)
- **Body**: Inter (clean readability)

### Effects
- **Glow Shadows**: 8px on active, 16px on glowing buttons
- **Inner Stroke**: Subtle on all cards
- **Border**: 1px white/10% opacity

## 📱 Screen Breakdown

| Screen | Key Features |
|--------|-------------|
| **Cover** | Design system showcase, navigation hub |
| **Home** | Festival banner, combos carousel, quick stats |
| **Restaurants** | Search, filters, restaurant cards |
| **Details** | Menu items, add to cart |
| **Cart** | Quantity controls, coupon entry, summary |
| **Checkout** | Address selection, payment methods |
| **Confirmation** | Success animation, order details |
| **Coupons** | Available discount codes |
| **Order Status** | Live tracking, progress bar |
| **Components** | Full component library |
| **Handoff** | Design specifications |

## 💡 Pro Tips

1. **Use Dev Navigation**: Fastest way to explore all screens
2. **Try Animations**: Hover over buttons and cards
3. **Apply Coupon**: Use "CYBER100" for ₹100 off
4. **Check Components**: See all variants in Component Library
5. **Read Handoff Notes**: Complete design specs for developers

## 🎭 Mock Data

### Available Coupons
- `CYBER100` - Flat ₹100 off on orders above ₹500
- `NEON20` - 20% off on all menu items
- `FIRST50` - Flat ₹50 off on first order
- `FESTIVAL25` - 25% off during festival hours
- `COMBO30` - 30% off on combo meals

### Featured Restaurants
1. **Neon Noodles** - Asian fusion
2. **Cyber Burger Bar** - Burgers from the future
3. **Electric Elixirs** - Neon cocktails
4. **Digital Desserts** - Sweet treats
5. **Pixel Snacks** - Quick bites

## 🛠️ Technical Details

### Built With
- React + TypeScript
- Tailwind CSS v4.0
- Motion/React (animations)
- Lucide Icons
- Google Fonts

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (optimized for 375-448px width)

## 📝 Next Steps

### For Designers
- Review Component Library for consistency
- Check Handoff Notes for complete specs
- Test all interactions and animations

### For Developers
- Use color tokens from globals.css
- Reference component specifications
- Follow spacing system (4pt base)
- Implement animations as documented

### For Stakeholders
- Experience the complete user flow
- Review brand consistency
- Validate feature completeness
- Provide feedback on UX

## 🎉 Ready to Explore!

The app is fully interactive and ready for testing. Start from the Cover Page and explore all 11 screens!

---

**Have questions?** Check the README.md for detailed documentation or PROJECT_STRUCTURE.md for technical details.
