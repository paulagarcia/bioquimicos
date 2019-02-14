import React from 'react';
// Link to hash
import { Link } from 'react-router-dom';
// Local styles
import galeriaStyles from './galeriaStyles';
// Material Component
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import tileData from './FotosHome.js'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class SectionImages extends React.Component{
  render(){
  const { classes } = this.props;
  const width = window.innerWidth;
  const getGridListCols = (cols) => {
   if (width <= 600) {
     return 3;
   }
   if (width >= 600 && width <= 960) {
     return 1.5;
   }
   return cols;
 }
  return(
    <div className={classes.imagenesContainer}>
      <h2 className={classes.sectionTitle}>Galería de imágenes</h2>
      <h3 className={classes.subtitle}>
        <Link to="/galeria"><span className={classes.subtitleExtra}> todas las imágenes</span></Link>
      </h3>
      <div className={classes.homeFotosContainer}>
        <GridList cellHeight={340} spacing={4} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={getGridListCols(tile.cols)} className={classes.homefoto} >

              <img src={tile.img} alt={tile.title} />
              <Link to={`/galeria/${tile.link}`}>
              <GridListTileBar
                title={tile.title}
                subtitle={<span> {tile.date} </span>}
                actionIcon={
                  <IconButton className={classes.icon} >
                    <NavigateNextIcon />
                  </IconButton>
                }
                actionPosition="right"
                className={classes.titleBar}
              /></Link>
            </GridListTile>

          ))}
        </GridList>
      </div>
    </div>
  )
}
}

export default withStyles(galeriaStyles)(SectionImages);
