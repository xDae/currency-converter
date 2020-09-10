import React from 'react'

export default function RateHistory({ rateHistory = [] }) {
    return (
        <div className="box historyWrapper">
            <h3>History</h3>

            <ul>
                <li>
                    {rateHistory.map(({ from, to, value, result}) => (
                        <div>
                            {from} {value} was {to} {result}
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    );
}
