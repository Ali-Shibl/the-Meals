import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import American from '../../assets/a3lam/American.png'
import British from '../../assets/a3lam/British.png'
import Canadian from '../../assets/a3lam/Canadian.png'
import Chinese from '../../assets/a3lam/Chinese.png'
import Croatian from '../../assets/a3lam/Croatian.png'
import Dutch from '../../assets/a3lam/Dutch.png'
import Egyptian from '../../assets/a3lam/Egyptian.png'
import Filipino from '../../assets/a3lam/filipino.png'
import French from '../../assets/a3lam/French.png'
import Greek from '../../assets/a3lam/Greek.png'
import Indian from '../../assets/a3lam/Indian.png'
import Irish from '../../assets/a3lam/Irish.png'
import Italian from '../../assets/a3lam/Italian.png'
import Jamaican from '../../assets/a3lam/Jamaican.png'
import Japanese from '../../assets/a3lam/Japanese.webp'
import Kenyan from '../../assets/a3lam/Kenyan.png'
import Malaysian from '../../assets/a3lam/Malaysian.png'
import Mexican from '../../assets/a3lam/Mexican.png'
import Moroccan from '../../assets/a3lam/Moroccan.png'
import Polish from '../../assets/a3lam/Polish.png'
import Portuguese from '../../assets/a3lam/Portuguese.png'
import Russian from '../../assets/a3lam/Russian.png'
import Spanish from '../../assets/a3lam/Spanish.png'
import Thai from '../../assets/a3lam/Thai.png'
import Tunisian from '../../assets/a3lam/Tunisian.png'
import Turkish from '../../assets/a3lam/Turkish.png'
import Vietnamese from '../../assets/a3lam/Vietnamese.png'







const Area = () => {
    const dataCountry = [
        {
            name: "American",
            image: American,
        },
        {
            name: "British",
            image: British,
        },
        {
            name: "Canadian",
            image: Canadian,
        },
        {
            name: "Chinese",
            image: Chinese,
        },
        {
            name: "Croatian",
            image: Croatian,
        },
        {
            name: "Dutch",
            image: Dutch,
        },
        {
            name: "Egyptian",
            image: Egyptian,
        },
        {
            name: "Filipino",
            image: Filipino,
        },
        {
            name: "French",
            image: French,
        },
        {
            name: "Greek",
            image: Greek,
        },
        {
            name: "Indian",
            image: Indian,
        },
        {
            name: "Jamaican",
            image: Jamaican,
        },
        {
            name: "Japanese",
            image: Japanese,
        },
        {
            name: "Polish",
            image: Polish,
        },
        {
            name: "Portuguese",
            image: Portuguese,
        },
        {
            name: "Malaysian",
            image: Malaysian,
        },
        {
            name: "Mexican",
            image: Mexican,
        },
        {
            name: "Moroccan",
            image: Moroccan,
        },
        {
            name: "Indian",
            image: Indian,
        },
        {
            name: "Irish",
            image: Irish,
        },
        {
            name: "Italian",
            image: Italian,
        },
        {
            name: "Russian",
            image: Russian,
        },
        {
            name: "Kenyan",
            image: Kenyan,
        },
        {
            name: "Spanish",
            image: Spanish,
        },
        {
            name: "Vietnamese",
            image: Vietnamese,
        },
        {
            name: "Thai",
            image: Thai,
        },
        {
            name: "Tunisian",
            image: Tunisian,
        },
        {
            name: "Turkish",
            image: Turkish
        }
    ]




    return (
        <>

<Helmet>
    <meta charSet="utf-8" />
    <title>Country</title>
</Helmet>

            <div className="row g-3 py-5">

                {
                    dataCountry.map((area, index) => <Link rel="preload" to={`/details/${area.name}`} key={index} className='text-decoration-none col-4 col-sm-3 col-md-2  col-lg-1'>


                        <div className='text-center'>

                            <img src={area.image} className='img-fluid' alt={area.name}/>
                            <p className=' m-0 mt-2'>{area.name}</p>

                        </div>
                    </Link>
                    )
                }


            </div>

        </>
    )
}

export default Area