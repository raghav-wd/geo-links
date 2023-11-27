import Grid from "@mui/material/Unstable_Grid2";
import { PieChart } from '@mui/x-charts/PieChart';

export const Socials = () => {
    return (
        <div>

            <Grid container textAlign="center">
                <Grid xs={12} display="flex" alignItems="center" justifyContent="center">
                    
                </Grid>
                <Grid xs={12} display="flex" alignItems="center" justifyContent="center">
                <PieChart
                    series={[
                        {
                        data: [
                            { id: 0, value: 10, label: 'Instagram', color: '#f16d7b' },
                            { id: 1, value: 15, label: 'Youtube', color: '#00a0b8' },
                            { id: 2, value: 20, label: 'Twitter', color: '#face59' },
                            { id: 3, value: 15, label: 'Threads', color: '#a47bb3' },
                            { id: 4, value: 15, label: 'Threads', color: '#55e3b1' },
                            { id: 5, value: 20, label: 'Email Address', color: '#71c1e6' },
                        ],
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 4,
                        cornerRadius: 5,
                        startAngle: -180,
                        endAngle: 180,
                        cx: 150,
                        cy: 150,
                        },
                    ]}
                    width={400}
                    height={300}
                    /> 
                </Grid>
            </Grid>
        </div>
    )
}