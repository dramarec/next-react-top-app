import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(2);
    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Htag tag='h2'>Текст</Htag>
            <Htag tag='h3'>Текст</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='l'>Paragraph</P>
            <P size='m'>Paragraph</P>
            <P size='s'>Paragraph</P>
            <Tag size='s'>small</Tag>
            <Tag size='m'>small</Tag>
            <Tag size='s' color='green'>small</Tag>
            <Tag size='s' color='grey'>small</Tag>
            <Tag size='m' color='primary'>small</Tag>
            <Tag size='m' color='red'>small</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}
