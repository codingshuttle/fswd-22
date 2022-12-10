import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { RiCoinsLine } from 'react-icons/ri';


function Converter() {
    const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

    const defaultFirstSelectValue = "Bitcoin";
    const defaultSecondSelectValue = "Ether";

    const [cryptoList, setCryptoList] = useState([]);
    const [inputValue, setInputValue] = useState("0");
    const [firstSelect, setFirstSelect] = useState(defaultFirstSelectValue);
    const [secondSelect, setSecondSelect] = useState(defaultSecondSelectValue);
    const [result, setResult] = useState("0");

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const data = jsonData.rates;
        const tempArray = Object.entries(data).map((item) => {
            return {
                value: item[1].name,
                label: item[1].name,
                rate: item[1].value,
            };
        });

        setCryptoList(tempArray);
    }

    useEffect(() => {
        
        if(cryptoList.length == 0) return;

        const firstSelectRate = cryptoList.find((item) => {
            return item.value === firstSelect
        }).rate;
        const secondSelectRate = cryptoList.find((item) => {
            return item.value === secondSelect
        }).rate;
        
        const resultValue =  (inputValue * secondSelectRate) / firstSelectRate;
        setResult(resultValue.toFixed(6));

    }, [inputValue, firstSelect, secondSelect])

    return (
        <div className="container">
            <Card className="crypto-card" title={<h1> <RiCoinsLine /> Crypto Converter</h1>}>
                <Form size="large">
                    <Form.Item>
                        <Input onChange={(event) => setInputValue(event.target.value)}/>
                    </Form.Item>
                </Form>
                <div className="select-box">
                    <Select
                        style={{ width: "200px" }}
                        defaultValue={defaultFirstSelectValue}
                        options={cryptoList}
                        onChange={(value) => setFirstSelect(value)}
                    />
                    <Select
                        style={{ width: "200px" }}
                        defaultValue={defaultSecondSelectValue}
                        options={cryptoList}
                        onChange={(value) => setSecondSelect(value)}
                    />
                </div>
                <p>{inputValue} {firstSelect} = {result} {secondSelect}</p>
            </Card>
        </div>
    );
}

export default Converter;
