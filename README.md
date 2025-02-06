# React useState Modification Bug
This repository demonstrates a common mistake when working with React's `useState` hook: directly modifying the state variable instead of using the setter function.  The `bug.js` file shows the incorrect approach and `bugSolution.js` provides the corrected version.

## Problem
In `bug.js`, the `count` variable is directly incremented, which does not trigger a re-render in React.  This leads to the component not updating the displayed value.

## Solution
The `bugSolution.js` file corrects this by using the `setCount` function to update the `count` state variable, as intended by the React framework.
