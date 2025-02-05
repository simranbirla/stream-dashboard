# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

```js
return (
    <div className='flex h-[100vh] flex-col '>
      <KeyMetrics />
      <DataVisualization />
      <Table />
    </div>
  )
```

The Application has three major components

1. KeyMetrics has cards that would show the data for revenue, stream count,
2. DataVisualization: Uses ChartJs to create pie chart for revenue, line chart for users, and bar chart for top songs
3. Table: uses react tanstack table for filtering and sorting data. You can reset the filters. You can use filters for date, song and artist. Sort using stream count.
