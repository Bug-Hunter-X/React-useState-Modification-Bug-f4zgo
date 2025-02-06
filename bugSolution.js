```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using the setCount function
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```