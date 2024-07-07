import React from 'react'
import "./Transaction.css"
import { TransactionData } from '../../Datas'
export default function Transactions() {
    const Button = ({ type }) => {
        return <button className={'Transactions-table__btn ' + type} >{type}</button>
    }
    return (
        <>
            <div className='Transactions'>
                <div className='Transactions-wrapper'>
                    <h3 className='Transactions-title'>
                        Lastest Transactions
                    </h3>

                    <table className="Transactions-table">
                        <thead>
                            <tr className="Transactions-table__row">
                                <th className="Transactions-table__head">Customer</th>
                                <th className="Transactions-table__head">Data</th>
                                <th className="Transactions-table__head">Amount</th>
                                <th className="Transactions-table__head">Status</th>
                            </tr>
                        </thead>
                        {TransactionData.map((singleItem) => (

                            <tbody   key={singleItem.data}>
                                <tr className="Transactions-table__row">
                                    <td className="Transactions-table__body">
                                        <div className='Transactions-table__body-inner'    >
                                            <img src={singleItem.img} alt="" className='Transactions-table__body-img' />
                                            <h4 className='Transactions-table__body-name'>{singleItem.name} </h4>
                                        </div>
                                    </td>
                                    <td className="Transactions-table__body">
                                        <span className='Transactions-table__body-data'>{singleItem.data}</span>
                                    </td>
                                    <td className="Transactions-table__body">
                                        <span className='Transactions-table__body-amount'>{singleItem.amount} $</span>
                                    </td>
                                    <td className="Transactions-table__body">
                                        <Button type={singleItem.status} />
                                    </td>
                                </tr>
                            </tbody>


                        ))}
                    </table>
                </div>

            </div>


        </>
    )
}
