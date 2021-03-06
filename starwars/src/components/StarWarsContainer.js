import React from "react"
import StarWarsCard from "./StarWarsCard";
import { Paper, withStyles, AppBar, Toolbar, Typography } from "@material-ui/core" ;

const styles = {
 paper: {
  maxWidth: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  background: 'DarkGray',
 },
 div: {
  display: 'flex',
  justifyContent: 'center',
  height: '100%'
 },
 card: {
  marginBottom: 20
 },
 header: {
  fontSize: 20
 }
}
class StarWarsContainer extends React.Component {
    render(){
     const { classes } = this.props
    return (
        <div className={classes.div}>
        <AppBar>
        <Toolbar>
         <Typography className={classes.header}>
          React Wars
         </Typography>
        </Toolbar>
           </AppBar>
         <Paper className={classes.paper}>
          {this.props.starwarsChars.map(character =>
          
          
            <StarWarsCard
              character={character}
              key={character.name} />
              
              )}
            </Paper>
        </div>
      );

    }

}



export default withStyles(styles)(StarWarsContainer) ;