const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/05/2022</td>
                        <td>Mayle</td>
                        <td>22</td>
                        <td>12</td>
                        <td>3.500.00</td>
                    </tr> 
                    <tr>
                        <td>22/05/2022</td>
                        <td>Wesley</td>
                        <td>34</td>
                        <td>25</td>
                        <td>5.968.00</td>
                    </tr> <tr>
                        <td>22/05/2022</td>
                        <td>Guilherme</td>
                        <td>39</td>
                        <td>27</td>
                        <td>6.221.00</td>
                    </tr> <tr>
                        <td>22/05/2022</td>
                        <td>Oliver</td>
                        <td>25</td>
                        <td>18</td>
                        <td>3.789.00</td>
                    </tr> <tr>
                        <td>22/05/2022</td>
                        <td>Paulo</td>
                        <td>50</td>
                        <td>41</td>
                        <td>8.584.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
