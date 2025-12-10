# Project Structure

## File Organization

```
/
├── App.tsx                          # Main application with routing
├── README.md                        # Project documentation
├── PROJECT_STRUCTURE.md            # This file
├── styles/
│   └── globals.css                 # Global styles & cyberpunk tokens
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Protected image component
│   ├── ui/                         # Shadcn components (pre-existing)
│   ├── CyberButton.tsx             # Primary, Secondary, Glowing variants
│   ├── FilterChip.tsx              # Active/Inactive filter chips
│   ├── GlowCard.tsx                # Base card with customizable glow
│   ├── CouponCard.tsx              # Flat & Percentage discount cards
│   ├── RestaurantCard.tsx          # Large & Small restaurant cards
│   ├── ProgressBar.tsx             # 4-stage animated progress
│   └── screens/
│       ├── CoverPage.tsx           # Landing page with design system
│       ├── HomePage.tsx            # Festival feed & combos
│       ├── RestaurantList.tsx      # Filterable restaurant grid
│       ├── RestaurantDetails.tsx   # Menu items with add to cart
│       ├── CartScreen.tsx          # Cart management & coupons
│       ├── CheckoutScreen.tsx      # Address & payment selection
│       ├── OrderConfirmation.tsx   # Success state
│       ├── CouponWallet.tsx        # Available coupons (optional)
│       ├── OrderStatus.tsx         # Live tracking (optional)
│       ├── ComponentLibrary.tsx    # Component showcase
│       └── HandoffNotes.tsx        # Design specifications
```

## Screen Flow

### Primary User Journey
```
Cover → Home → Restaurants → Restaurant Details → Cart → Checkout → Confirmation → Order Status
```

### Alternative Routes
```
Home → Coupons → Cart
Cover → Component Library
Cover → Handoff Notes
```

## Key Features by Screen

### 1. Cover Page
- App branding with glowing logo
- Color palette swatches
- Typography tiles
- Navigation to main app, components, and handoff notes

### 2. Home Page
- Large festival banner
- Neon combos carousel
- "Order Now" and "View Coupons" CTAs
- Quick stats (vendors, dishes, status)

### 3. Restaurant List
- Search bar
- Filter chips (All, Drinks, Snacks, Meals, Desserts)
- Glowing restaurant cards with ratings

### 4. Restaurant Details
- Header banner with restaurant info
- Menu items list
- Add to cart functionality
- Fixed bottom "View Cart" button

### 5. Cart Screen
- Item quantity controls
- Remove items
- Coupon entry with validation
- Order summary
- Proceed to checkout

### 6. Checkout Screen
- Address selection (radio buttons)
- Payment method selection (UPI, Card, Cash)
- Bill summary
- Place order CTA

### 7. Order Confirmation
- Animated success checkmark
- Order ID display
- Estimated delivery time
- Total amount
- Track order / Back to home CTAs

### 8. Coupon Wallet (Optional)
- Scrollable coupon cards
- Percentage and flat discount types
- Tap to copy functionality

### 9. Order Status (Optional)
- Animated progress bar
- Current status with pulsing glow
- Delivery information
- Contact delivery partner option

### 10. Component Library
- All components with variants
- Live examples
- Typography samples
- Color palette
- Design tokens

### 11. Handoff Notes
- Complete color token reference
- Typography specifications
- Spacing system documentation
- Effects and shadow specs
- Component specifications
- Animation guidelines
- Implementation notes

## Design System

### Components

#### CyberButton
- **Variants**: primary, secondary, glowing
- **Props**: variant, onClick, className, fullWidth
- **Animations**: Hover scale (1.02), Tap scale (0.95)

#### FilterChip
- **States**: active, inactive
- **Props**: label, active, onClick
- **Styling**: Filled (active) or outlined (inactive)

#### GlowCard
- **Features**: Customizable glow color, inner stroke, rounded corners
- **Props**: children, className, glowColor, onClick
- **Usage**: Base for all card components

#### CouponCard
- **Types**: flat, percentage
- **Props**: code, discount, description, type, color
- **Animations**: Hover scale with glow effect

#### RestaurantCard
- **Sizes**: small, large
- **Features**: Image, name, tagline, star ratings
- **Props**: name, tagline, rating, image, onClick, size

#### ProgressBar
- **Steps**: 4-stage customizable
- **Props**: currentStep, steps
- **Animations**: Gradient line progress, pulsing active step

### Color Tokens (CSS Variables)

```css
--dark-bg: #0a0a0f
--dark-navy: #0f0f1e
--neon-pink: #ff006e
--neon-magenta: #f72585
--neon-cyan: #00f5ff
--neon-blue: #3a86ff
--neon-lime: #ccff00
--neon-purple: #b000ff
```

### Typography

- **Headings**: `font-family: 'JetBrains Mono', monospace`
- **Body**: `font-family: 'Inter', sans-serif`

### Spacing

- Base unit: 4px
- Border radius: 8px
- Card padding: 16px
- Section gap: 24px

### Effects

- Active glow: `0 0 8px rgba(color, 0.5)`
- Strong glow: `0 0 16px rgba(color, 0.8)`
- Inner stroke: `inset 0 0 1px rgba(255,255,255,0.1)`
- Card border: `1px solid rgba(255,255,255,0.1)`

## Navigation System

The app uses a custom screen-based navigation with:
- Forward navigation via `navigateTo(screen)`
- Back navigation via `goBack()` using history stack
- Animated transitions (fade + slide)
- Dev navigation panel (toggleable)

## State Management

Simple React useState for:
- Current screen
- Navigation history
- Filter selections
- Cart quantities
- Coupon application
- Order progress tracking

## Animation Library

- **Motion/React** (Framer Motion compatible)
- Page transitions: 300ms fade + slide
- Hover effects: scale(1.02)
- Tap effects: scale(0.95)
- Glow pulsing: 2s infinite loop

## Image Sources

All images from Unsplash API:
- Neon cyberpunk food
- Neon ramen bowls
- Neon burgers
- Neon desserts
- Neon cocktails
- Cyberpunk city scenes

## Development Features

- TypeScript for type safety
- Responsive mobile-first design (max-width: 448px)
- Dark mode only (cyberpunk theme)
- Custom scrollbar styling
- Smooth animations
- Interactive prototyping
- Complete design system documentation

## Production Ready

✅ All screens implemented  
✅ Component library documented  
✅ Design tokens defined  
✅ Handoff notes complete  
✅ User flow tested  
✅ Animations polished  
✅ Responsive design  
✅ Clean code structure  
✅ Type-safe components  
✅ Reusable design system  

---

**Ready for**: Design handoff, development implementation, user testing, stakeholder presentation
