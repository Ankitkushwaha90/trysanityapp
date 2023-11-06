import React from "react";
import { client } from "@/utils/configSanity";
// import { PortableText } from "../../node_modules/@portabletext/react/dist/react-portable-text";
// import PortableText from "react-portable-text"
import { PortableText } from "@portabletext/react";

interface IPortfolio {
    _id: string;
    title: string;
    description: any;
    _createdAt: string;
}

async function getData() {
    const query = `*[_type == 'portfolio']`;
    const data = await client.fetch(query);
    return data as IPortfolio[];
}

const Portfolio = async() => {
    const data = (await getData()) as IPortfolio[];
    console.log(data);
    console.log("hello world");

    return(
        <>
            <h1>hello welcomeprotfolio</h1>
            {data?.map((item) => (
                <div key={item?._id} >
                    <div>
                        <span>{item?.title}</span>
                    </div>
                    <div>
                        <span>
                            <PortableText value={item?.description}/>
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Portfolio;