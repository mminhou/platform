import React from 'react';
import {Grid} from "@material-ui/core";
import {HomePagination} from "../Pagination/HomePagination";
import Footer from "../Footer/Footer";

const Home = () => {

    return (

        <div style={{backgroundColor: 'rgb(235, 234, 229)'}}>
            <Grid container style={{textAlign: "center"}}>
              <Grid item xs={12}>
                  <div style={{border: '1px solid black', height: 300, marginTop: 120, marginBottom: 20}}>
                    carousel include navigation
                  </div>
              </Grid>
              <Grid item xs={12} style={{  height: 500 }}>
                  New pagination 6 * 3
                  <HomePagination />
              </Grid>
              <Grid item xs={12} style={{ height: 150 }}>
                  open project -> link page(create board)
              </Grid>
              <Grid item xs={12}>
                  <Footer />
              </Grid>
          {/* mainImage, title, funding, name */}
          </Grid>



        </div>
    );
};

export default Home;