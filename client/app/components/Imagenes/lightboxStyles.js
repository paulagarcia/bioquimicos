const lightboxStyles = {
  container:{
    background: 'rgba(0, 0, 0, 0.85)'
  },
  close: {
    opacity: '0.9',
    borderRadius: '50%',
    background: 'rgba(240, 239, 238, 0.13)',
    height: '37px',
    width: '37px',
    top: '-5px',
    marginRight: '-5px',
    '@media (min-width: 960px)':{
      top: '8px',
      marginRight: '-45px',
    }
  },
  image:{
    borderRadius: '3px',
    border: '3px solid #eee'
  },
  footerCount:{
    fontFamily: 'raleway'
  },
  arrow:{
    opacity: '0.8',
    '@media (min-width: 768px)':{
      width: '60px',
    }
  }
}

export default lightboxStyles;
