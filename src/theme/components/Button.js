const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  variants: {
    solid: props => ({
      //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
      bgGradient: 'linear(to-r, #BF5AE0, #A811DA)',
      color: 'white',
      px: 6,
      letterSpacing: '1px',
      position: 'relative',

      _after: {
        transition: 'opacity 0.1s ease-out',
        content: '"dalej"',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0,
        // boxShadow: '8px 12px 30px 7px #BF5AE040',
        bgGradient: 'linear(to-l, #BF5AE0, #A811DA)',
        borderRadius: 'md',
        py: '0.7rem',
      },
      _hover: {
        bgGradient: 'linear(to-r, #BF5AE0, #A811DA)',
        // transform: 'translateY(-4px)',
        _after: {
          opacity: 1,
        },
      },
      _active: {
        bgGradient: 'linear(to-r, #BF5AE0, #A811DA)',
      },
    }),
    ghost: props => ({
      // color: '#A8A8A8',
      color: 'purple.100',

      _hover: {
        color: 'purple.300',
        bg: 'purple.10',
      },

      _active: {
        bg: 'purple.50',
      },
    }),
  },
}

export default Button
