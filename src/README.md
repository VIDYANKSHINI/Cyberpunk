# Cyberpunk Food Festival Created by Vidyankshini Vibhute and Shravani Tanksale 

A mobile-first digital ordering platform for IIIT-B's neon-themed food festival. This prototype features a complete cyberpunk aesthetic with glowing neon accents, smooth animations, and a comprehensive user flow.

## 🎨 Design System

### Color Palette

- **Dark Backgrounds**
  - `--dark-bg`: #0a0a0f (Main background)
  - `--dark-navy`: #0f0f1e (Card background)

- **Neon Accents**
  - `--neon-pink`: #ff006e
  - `--neon-magenta`: #f72585 (Primary)
  - `--neon-cyan`: #00f5ff (Primary)
  - `--neon-blue`: #3a86ff
  - `--neon-lime`: #ccff00
  - `--neon-purple`: #b000ff

### Typography

- **Headings**: JetBrains Mono (Bold, Techy)
- **Body Text**: Inter (Regular, Clean)

### Spacing System

- Base Unit: 4pt (4px)
- Border Radius: 8px
- Card Padding: 16px
- Section Gap: 24px

### Effects

- Active Element Glow: `box-shadow: 0 0 8px rgba(color, 0.5)`
- Strong Glow: `box-shadow: 0 0 16px rgba(color, 0.8)`
- Card Inner Stroke: `box-shadow: inset 0 0 1px rgba(255,255,255,0.1)`
- Card Border: 1px solid rgba(255,255,255,0.1)

## 📱 Screens

### Core Flow
1. **Cover Page** - App logo, design system showcase
2. **Home / Festival Feed** - Banner, neon combos carousel, CTAs
3. **Restaurant List** - Filter chips, searchable restaurant cards
4. **Restaurant Details** - Menu items with add to cart
5. **Cart Screen** - Item management, coupon entry, order summary
6. **Checkout** - Address selection, payment methods
7. **Order Confirmation** - Success state with order details

### Optional Screens
8. **Coupon Wallet** - All available coupons
9. **Order Status** - Live order tracking with progress bar

### Documentation
10. **Component Library** - All reusable components with variants
11. **Handoff Notes** - Complete design specifications

## 🎯 Component Library

### Buttons
- **Primary**: Magenta filled with pink border
- **Secondary**: Transparent with cyan border
- **Glowing**: Gradient with intense glow effect

### Cards
- **GlowCard**: Base card with customizable glow color
- **RestaurantCard**: Large and small variants
- **CouponCard**: Flat and percentage discount types

### Interactive
- **FilterChip**: Active/inactive states
- **ProgressBar**: 4-stage tracking with animations

## 🚀 Features

- Mobile-first responsive design
- Smooth page transitions with Motion/React
- Interactive hover and tap animations
- Consistent cyberpunk aesthetic
- Complete user flow from browsing to order confirmation
- Reusable component system
- Comprehensive design documentation

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS v4.0
- Motion/React (Framer Motion)
- Lucide Icons
- Google Fonts

## 📸 Images

All images sourced from Unsplash API with neon/cyberpunk themes.

## 🎯 User Flow

```
Cover → Home → Restaurants → Details → Cart → Checkout → Confirmation → Status
              ↓
           Coupons
```

## 💡 Usage

Navigate through screens using the bottom navigation overlay (dev mode) or follow the natural user flow by clicking buttons and cards.

The app includes:
- Interactive prototyping
- Smart animations
- Consistent design language
- Complete ordering flow
- Order tracking
- Coupon system

## 📝 Handoff Ready

All color tokens, typography, spacing, and component specifications are documented in the Handoff Notes screen. The design system is ready for development handoff with:

- CSS custom properties for all colors
- Consistent spacing system
- Component specifications
- Animation guidelines
- Implementation notes

---

**Built for**: IIIT-B Cyberpunk Food Festival  
**Theme**: Futuristic Neon Aesthetic  
**Platform**: Mobile-First Web Application
