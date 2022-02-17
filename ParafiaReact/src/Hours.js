import { Component } from "react";

export class Hours extends Component{

    render(){
        return(
            <div className="container-hours-subpage">
                <div className="table-hours-subpage">
                    <table>
                        <tr>
                            <th>Godziny / Dni</th>
                            <th>Dni powszechne</th>
                            <th>Niedziele i święta</th>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td>10:00 - 11:00</td>
                            <td>7:00 - 8:00</td>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td>12:00 - 13:00</td>
                            <td>8:00 - 9:00</td>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td>17:00 - 18:00</td>
                            <td>10:00 - 11:00</td>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td>20:00 - 21:00</td>
                            <td>12:00 - 13:00</td>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td></td>
                            <td>15:00 - 16:00</td>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td></td>
                            <td>17:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td className="hours-table-value"><b>Godziny</b></td>
                            <td></td>
                            <td>20:00 - 21:00</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}