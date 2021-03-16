const BoxStyles = {
  base: {
    background: '#FFFFFF',
    border: '1px solid #E5E2F0',
    boxSizing: 'border-box',
    borderRadius: '20px',
  },
  selected: {
    bg: 'teal.500',
    color: 'teal.700',
    borderColor: 'orange.500',
  },
}

export default BoxStyles

// // 3. Consume the text styles in your components
// function Example() {
//   return <Box layerStyle="selected">This is a box</Box>
// }

// // 4. You can also switch layer styles
// function Example({ isSelected }) {
//   const layerStyle = isSelected ? 'selected' : 'base'
//   return <Box layerStyle={layerStyle}>This is a box</Box>
// }
