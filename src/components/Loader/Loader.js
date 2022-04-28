import React from 'react';
import Grid from "@material-ui/core/Grid";

function Loader() {
    return (
        <Grid container>
            <Grid item sm={12}  xs={24} container direction="row" justify="center" alignItems="center">
                <div className="loadingio-eclipse">
                    <div className="ldio-rpinwye8j0b">
                        <div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item sm={12}  xs={24} container direction="row" justify="center" alignItems="center">
                <span className="box-header-content">Please Wait your data is loading....</span>
            </Grid>
        </Grid>
    );
}
export default Loader;