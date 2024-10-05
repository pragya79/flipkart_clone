import React from 'react'
import { banners, gifts, styles, topselling } from '../../../dynamic/data'
import '../../../assets/css/banners.css'

export const Banners = () => {
  return (
    <>
        <div className="banners">
        {
            banners.map(data=>{
                return(
                    <div className="poster">
                        <img src={data.url} />
                    </div>
                )
            })
        }

    </div>

    <div className="offers">
        <div className="lefty">
            <h2>Friendship's Day Gifts</h2>
            <div className="gift">
            
                {
                    gifts.map(data=>{
                        return(
                            <div className="details">
                                <img src={data.url} />
                                <p>{data.model}</p>
                                <h4>{data.price}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="middle">
            <h2>Explore New Styles</h2>
            <div className="gift">
            
                {
                    styles.map(data=>{
                        return(
                            <div className="details">
                                <img src={data.url} />
                                <p>{data.model}</p>
                                <h4>{data.price}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="topselling">
            {
                topselling.map(data=>{
                    return(
                        <div className="hording">
                            <img src={data.url} />
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>


  )
}
