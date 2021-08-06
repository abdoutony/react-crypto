import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export default function Currency() {
    let {id} =useParams();
    let history = useHistory();

    const [coin,setCoin] = useState({
        id:"",
        symbol:"",
        name:"",
        nameid:"",
        rank:0,
        price_usd:"",
        percent_change_24h:"",
        percent_change_1h:"",
        percent_change_7d:"",
        price_btc:"",
        market_cap_usd:"",
        volume24:0,
        volume24a:0,
        csupply:"",
        tsupply:"",
        msupply:""
    });

    useEffect(()=>{
        axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`)
        .then((coin)=>{
            setCoin({
                id:coin.data[0].id,
                symbol:coin.data[0].symbol,
                name:coin.data[0].name,
                nameid:coin.data[0].nameid,
                rank:coin.data[0].rank,
                price_usd:coin.data[0].price_usd,
                percent_change_24h:coin.data[0].percent_change_24h,
                percent_change_1h:coin.data[0].percent_change_1h,
                percent_change_7d:coin.data[0].percent_change_7d,
                price_btc:coin.data[0].price_btc,
                market_cap_usd:coin.data[0].market_cap_usd,
                volume24:coin.data[0].volume24,
                volume24a:coin.data[0].volume24a,
                csupply:coin.data[0].csupply,
                tsupply:coin.data[0].tsupply,
                msupply:coin.data[0].msupply
            })
            console.log(coin)
        })
    },[])
    return (
        <div className="header container">
            <div className="text-center">
                <a className="text-white"
                style={{cursor:'pointer'}}
                onClick={()=> history.push('/')}
                >Home page</a>
            </div>

            <div className="row d--f jc--c">
               <h1 className="text-center text-white">Details of  the Cryptocurrency : {coin.name} </h1>
            </div>
            <div className="row d--f jc--c" style={{paddingBottom:'50px'}}>
               <div className="card col-md-5 mt-4" style={{paddingBottom:'50px'}}>
                    <div className="card-body">
                           <h5 class="card-title">
                                  <b>Symbol : </b>
                                  <span className="text-muted">{coin.symbol}</span>
                               </h5>
                              <h5 class="card-title">
                                  <b>Name : </b>
                                  <span className="text-muted">{coin.name}</span>
                              </h5>
                              <h5 class="card-title">
                                  <b>NameID : </b>
                                  <span className="text-muted">{coin.nameid}</span>
                              </h5>
                              <h5 class="card-title">
                                  <b>Rank : </b>
                                  <span className="text-muted">{coin.rank}</span>
                              </h5>
                              <h5 class="card-title">
                                <b>Price Usd : </b>
                                <span className="text-muted">
                                    <NumberFormat value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </span>
                              </h5>
                              <h5 class="card-title">
                                  <b>Percent Change_24h : </b>
                                   <span className="text-muted">{coin.percent_change_24h} %</span>
                              </h5>
                              <h5 class="card-title">
                                  <b>Percent Change_1h : </b>
                                  <span className="text-muted">{coin.percent_change_1h} %</span>
                              </h5>
                              <h5 class="card-title">
                                  <b>Percent Change_7d : </b> 
                                  <span className="text-muted">{coin.percent_change_7d} %</span>
                              </h5>
                              <h5 class="card-title">
                                <b>Price Btc : </b> 
                                <span className="text-muted">
                                    <NumberFormat value={coin.price_btc} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </span>
                              </h5>
                              <h5 class="card-title">
                                <b>Market Cap Usd : </b>
                                <span className="text-muted">
                                    <NumberFormat value={coin.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    B
                                </span>
                              </h5>
                              <h5 class="card-title">
                                <b>Volume24 : </b>
                                <span className="text-muted">
                                    <NumberFormat value={coin.volume24} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </span>
                              </h5>
                              <h5 class="card-title">
                                <b>Volume24a : </b>
                                <span className="text-muted">
                                    <NumberFormat value={coin.volume24a} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </span>
                              </h5>
                              <h5 class="card-title">
                                <b>Csupply : </b>
                                <span className="text-muted">
                                    <NumberFormat value={coin.csupply} displayType={'text'} thousandSeparator={true}/>
                                </span>
                              </h5>
                              <h5 class="card-title">
                                <b>Tsupply : </b> 
                                <span className="text-muted">
                                    <NumberFormat value={coin.tsupply} displayType={'text'} thousandSeparator={true}/>
                                </span>
                              </h5>
                              <h5 class="card-title">
                                <b>Msupply : </b>
                                <span className="text-muted">
                                    <NumberFormat value={coin.msupply} displayType={'text'} thousandSeparator={true}/>
                                </span>
                              </h5>
                    </div>
               </div>
            </div>
        </div>
    )
}
