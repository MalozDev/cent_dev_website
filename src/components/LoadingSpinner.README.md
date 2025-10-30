# LoadingSpinner Component

A beautiful loading spinner component that uses the CenDev logo with smooth spinning animation and glow effects.

## Features

- ✨ Uses the company's `cendev.svg` logo
- 🔄 Smooth continuous rotation animation
- 💫 Pulsing glow effect
- 📱 Responsive sizing options
- 🎭 Full-screen overlay or inline usage
- ⚡ Framer Motion animations

## Usage

### Full Screen Loading (Default)

```tsx
import LoadingSpinner from "./components/LoadingSpinner";
import { AnimatePresence } from "framer-motion";

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  return <AnimatePresence>{isLoading && <LoadingSpinner />}</AnimatePresence>;
}
```

### Inline Spinner (No Overlay)

```tsx
<LoadingSpinner fullScreen={false} size="md" />
```

### Different Sizes

```tsx
{
  /* Small */
}
<LoadingSpinner size="sm" />;

{
  /* Medium (default) */
}
<LoadingSpinner size="md" />;

{
  /* Large */
}
<LoadingSpinner size="lg" />;

{
  /* Extra Large */
}
<LoadingSpinner size="xl" />;
```

### With Custom Hook

```tsx
import { useLoading } from "../hooks/useLoading";
import LoadingSpinner from "./LoadingSpinner";
import { AnimatePresence } from "framer-motion";

function MyComponent() {
  const { isLoading, withLoading } = useLoading();

  const handleSubmit = async () => {
    await withLoading(async () => {
      // Your async operation
      await fetch("/api/data");
    });
  };

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingSpinner />}</AnimatePresence>

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

### Page Transitions (Already Implemented)

The loading spinner is automatically shown during page transitions in `App.tsx`. It displays when navigating between routes for a smooth user experience.

## Props

| Prop         | Type                           | Default | Description                            |
| ------------ | ------------------------------ | ------- | -------------------------------------- |
| `size`       | `"sm" \| "md" \| "lg" \| "xl"` | `"md"`  | Size of the spinner                    |
| `fullScreen` | `boolean`                      | `true`  | Whether to show as full-screen overlay |

## Animations

- **Logo Rotation**: Continuous 360° rotation (2s duration, linear)
- **Glow Pulse**: Scale and opacity pulsing effect (2s duration, ease-in-out)
- **Loading Text**: Animated ellipsis dots (1.5s duration)

## Styling

The component uses:

- Tailwind CSS for styling
- Framer Motion for animations
- Emerald/teal theme colors matching the site design
- Dark backdrop with blur effect for full-screen mode

## Examples

### Loading Data

```tsx
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch("/api/data")
    .then((res) => res.json())
    .then((data) => setData(data))
    .finally(() => setIsLoading(false));
}, []);

return (
  <>
    <AnimatePresence>{isLoading && <LoadingSpinner />}</AnimatePresence>
    {data && <DataDisplay data={data} />}
  </>
);
```

### Form Submission

```tsx
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await submitForm(formData);
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <>
    <AnimatePresence>{isSubmitting && <LoadingSpinner />}</AnimatePresence>

    <form onSubmit={handleSubmit}>{/* form fields */}</form>
  </>
);
```

## Notes

- Always wrap with `<AnimatePresence>` from Framer Motion for smooth enter/exit animations
- The spinner automatically centers itself when in full-screen mode
- Z-index is set to 10000 to ensure it appears above all other content
- The logo path is `/cendev.svg` from the public directory
