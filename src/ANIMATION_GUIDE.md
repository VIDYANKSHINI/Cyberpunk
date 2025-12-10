# 🎨 Cyberpunk Food Festival - Animation Guide

## Overview
All components now feature smooth, cyberpunk-themed animations that enhance the user experience with neon glows, shimmers, and interactive feedback.

---

## 🌟 Global Animations

### Screen Transitions
- **Type**: Blur fade with slide
- **Effect**: Pages blur in/out while sliding
- **Duration**: 300ms
- **Implementation**: All screen changes in App.tsx

```typescript
pageVariants = {
  initial: { opacity: 0, x: 20, filter: 'blur(10px)' },
  animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: -20, filter: 'blur(10px)' }
}
```

---

## 🎯 Component-Specific Animations

### 1. **CyberButton**
- ✨ **Shimmer Effect**: White gradient sweeps on hover
- 🔄 **Scale**: 1.02x on hover, 0.95x on tap
- ⏱️ **Duration**: 0.8s shimmer

**Features**:
- Glowing variants automatically pulse
- Smooth transitions on all interactions
- Relative z-index for layered effects

---

### 2. **FilterChip**
- 💫 **Active State**: Continuous pulsing glow
- ✨ **Shimmer**: Animated gradient on active chips
- 🔄 **Scale**: 1.05x on hover, 0.95x on tap

**Active Animation**:
```typescript
boxShadow: [
  '0 0 8px rgba(0,245,255,0.6)',
  '0 0 16px rgba(0,245,255,0.8)',
  '0 0 8px rgba(0,245,255,0.6)'
]
```

---

### 3. **CouponCard**
- 🎪 **Hover**: Scale 1.02x + lift -4px
- ✨ **Shimmer**: White gradient sweep
- 🎲 **Tag Icon**: Rotates -10° to 10° on hover
- 🎯 **Code Text**: Slides 2px right on hover

**Spring Animation**:
- Type: Spring
- Stiffness: 300
- Damping: 20

---

### 4. **RestaurantCard**
- 🎪 **Hover**: Scale 1.02x + lift -4px
- 🖼️ **Image**: Scales 1.05x on hover
- ⭐ **Stars**: Staggered appear (50ms delay each)
- ✨ **Shimmer**: Full card shimmer effect
- 🎯 **Name**: Slides 2px right on hover

---

### 5. **MenuItemCard**
- 🎪 **Card Hover**: Scale 1.02x + lift -2px
- 🖼️ **Image Hover**: Scale 1.05x
- 💰 **Price Tag**: Scale 1.05x on hover
- ➕ **Add Button**: 
  - Scale 1.1x on hover
  - Scale 0.9x on tap
  - Glowing shadow appears
  - Spring animation (stiffness: 400)

---

### 6. **CartItemCard**
- 📦 **Layout**: Animated layout shifts
- 🎪 **Hover**: Scale 1.01x
- ✨ **Shimmer**: Subtle white gradient
- 🖼️ **Image**: Scale 1.05x + rotate 2° on hover
- ❌ **Remove Button**: 
  - Scale 1.2x on hover
  - Rotate 90° on tap
- 🔢 **Quantity**: 
  - Number animates up/down
  - Buttons pulse glow on hover
  - +/- buttons scale 1.1x on hover

---

### 7. **VoiceButton**
- 🎙️ **Inactive**: Static cyan glow
- 🔴 **Active**: Pulsing magenta with rings
- 🌊 **Rings**: Two expanding circles (2s duration)
- 💓 **Pulse**: Scale 1.0 to 1.2 continuously

---

### 8. **FoodTrendCard**
- 🌟 **Background**: Pulsing glow (2s cycle)
- 🏷️ **Hot Badge**: Animated glow shadow
- 🎪 **Hover**: Scale 1.05x
- 🎯 **Tap**: Scale 0.95x

**Background Animation**:
```typescript
opacity: [0.3, 0.6, 0.3],
scale: [1, 1.02, 1]
```

---

### 9. **ShareButton**
- ✨ **Glow**: Pulsing magenta shadow (2s cycle)
- 🌈 **Shimmer**: Continuous sweep animation
- 🎪 **Hover**: Scale 1.02x
- 🎯 **Tap**: Scale 0.98x

---

### 10. **LoadingRing**
- 🔄 **Spin**: 360° continuous rotation
- 💫 **Outer Glow**: Pulsing scale 1.0 to 1.2
- 💓 **Center**: Pulsing shadow effect
- ⏱️ **Duration**: 1s spin, 2s pulse

---

### 11. **SoundtrackToggle**
- 🔇 **Muted**: Gray, no animation
- 🔊 **Active**: Purple pulsing glow
- 📊 **Soundwave**: 3 bars animating (4-12px height)
- ⏱️ **Duration**: 0.8s wave cycle, staggered 0.2s

---

### 12. **CrowdStatusIndicator**
- 🔴 **Level Colors**: Green/Orange/Red
- 💫 **Ring**: Pulsing expansion animation
- 🌟 **Glow**: Color-matched shadow pulse
- ⏱️ **Duration**: 2s infinite

---

### 13. **VoiceModal**
- 🎙️ **Listening State**:
  - Pulsing center circle (scale 1.0 to 1.1)
  - Two expanding rings (2s + 0.7s delay)
  - 5 waveform bars (20-40px bounce)
- ✅ **Success State**:
  - Fade in with upward motion (y: 20 to 0)
  - Checkmark icon animation

---

## 🎬 Screen-Specific Animations

### HomePage
- 🎤 **Voice Button**: Fixed bottom-right, always accessible
- 🎵 **Soundtrack**: Top-right header toggle
- 🔥 **Popular Now**: Horizontal scroll with pulsing cards
- 📦 **Cart Icon**: Badge with item count

---

### RestaurantList
- 🔍 **Search Bar**: 
  - Fade in from top (y: -10 to 0)
  - Cyan glow on focus
  - Shadow: `0 0 16px rgba(0,245,255,0.4)`
- 🏷️ **Filters**: Staggered appearance
- 🏪 **Cards**: Staggered 100ms delay each

---

### RestaurantDetails
- 🖼️ **Banner**: Fade in from top (y: -20 to 0)
- 🔙 **Back Button**: Hover scale 1.05x
- ⭐ **Stars**: Staggered 50ms delay each
- 📋 **Menu Items**: Enhanced with all MenuItemCard animations

---

### OrderConfirmation
- ✅ **Success Icon**: 
  - Spring scale (0 to 1)
  - Pulsing lime glow (20-60px)
- ✨ **Share Section**: Fade scale from 0.9 to 1
- 🎊 **Confetti**: 20 particles, random trajectories
  - Rise -300 to -600px
  - Random X offset
  - Fade opacity 1 to 0
  - Duration: 2s with staggered 0.1s delay

---

### FindSeatScreen
- 🗺️ **Zone Markers**:
  - Pulsing glow rings
  - Staggered appearance (0.2s delay)
  - Hover scale 1.1x
  - Color-coded by crowd level
- ⭐ **Recommended Badge**: Floating animation (y: 0 to -5px)
- 💡 **AI Suggestion**: Sparkle icon rotation

---

### OrderStatus
- 📊 **Progress Bar**: Animated step transitions
- 🕒 **Status Icon**: Pulsing cyan glow (10-20px)
- 📱 **Status Updates**: Fade in with y: 20 to 0

---

### CheckoutScreen
- ⚙️ **Processing Overlay**:
  - Black backdrop with blur
  - LoadingRing component
  - Pulsing text opacity (0.5 to 1)
  - Auto-dismiss after 2s

---

### CouponWallet
- 🎟️ **Coupons**: Staggered 100ms delay
- 📱 **Enhanced CouponCard**: All animations active
- 🔙 **Header**: Fade from top

---

## 🎨 Color-Coded Glows

### By Component Type:
- 🔴 **Primary Actions**: Magenta `#ff006e`
- 🔵 **Secondary Actions**: Cyan `#00f0ff`
- 🟢 **Success States**: Lime `#00ff9f`
- 🟣 **Special Features**: Purple `#9333ea`

### Glow Intensity:
- **Idle**: `0 0 8px`
- **Hover**: `0 0 16px`
- **Active**: `0 0 24px`

---

## ⚡ Performance Tips

### Optimizations Used:
1. **will-change**: Implicit via Motion
2. **transform**: Hardware-accelerated properties
3. **opacity**: GPU-accelerated
4. **Spring animations**: Natural, performant motion
5. **Staggered renders**: Prevents jank

### What to Avoid:
- ❌ Animating `width`/`height` directly
- ❌ Too many simultaneous animations
- ❌ Complex filters on large elements

---

## 🎯 Interactive States

### Button Interactions:
```typescript
whileTap={{ scale: 0.95 }}      // Pressed
whileHover={{ scale: 1.02 }}    // Hovered
transition={{ duration: 0.2 }}  // Smooth
```

### Card Interactions:
```typescript
whileHover={{ scale: 1.02, y: -4 }}  // Lift effect
transition={{ type: 'spring' }}      // Natural motion
```

---

## 🌟 Special Effects

### 1. Shimmer Effect
**Used on**: Buttons, Cards, FilterChips
```typescript
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
  initial={{ x: '-100%' }}
  whileHover={{ x: '200%' }}
  transition={{ duration: 0.8 }}
/>
```

### 2. Pulsing Glow
**Used on**: Active states, Status indicators
```typescript
animate={{
  boxShadow: [
    '0 0 10px color',
    '0 0 20px color',
    '0 0 10px color'
  ]
}}
transition={{ duration: 2, repeat: Infinity }}
```

### 3. Confetti Particles
**Used on**: Order confirmation share
```typescript
animate={{
  y: [0, -300, -600],
  x: [0, random * 200],
  opacity: [1, 1, 0],
  scale: [1, 1.5, 0]
}}
```

---

## 🚀 Testing Checklist

Test all animations by:
- [ ] Hovering over all interactive elements
- [ ] Tapping/clicking buttons and cards
- [ ] Navigating between screens
- [ ] Triggering voice assistant
- [ ] Adding items to cart
- [ ] Applying coupons
- [ ] Watching order progress
- [ ] Sharing order confirmation
- [ ] Viewing seat map

---

## 💡 Animation Philosophy

**Goal**: Create a futuristic, responsive interface that feels:
- ⚡ **Fast**: Snappy feedback (<200ms)
- 🎨 **Delightful**: Surprising micro-interactions
- 🎯 **Purposeful**: Every animation serves UX
- 🌈 **Cohesive**: Consistent timing and easing

**Cyberpunk Aesthetic**:
- Neon glows that pulse with life
- Sharp, quick movements
- Tech-inspired effects (shimmer, glitch)
- Bold color transitions

---

## 🔧 Customization

To adjust animation speeds globally:
```typescript
// Fast mode (for development)
transition={{ duration: 0.1 }}

// Slow mode (for presentations)
transition={{ duration: 1.0 }}

// Default (production)
transition={{ duration: 0.3 }}
```

---

**Enjoy the neon-powered, animated cyberpunk experience!** ✨🌈⚡
