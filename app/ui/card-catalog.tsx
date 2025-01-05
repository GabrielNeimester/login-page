import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function CardCatalog() {

    const list = [
        {
            title: "Aroma floral",
            img: "/aroma-floral.jpg"
        },
        {
            title: "Aromas Quente/Temperado",
            img: "/aroma-quente.jpg"
        },
        {
            title: "Fragrâncias amadeiradas",
            img: "/fragan-amad.jpg"
        },
        {
            title: "Especiais",
            img: "/especiais.jpg"
        },
        {
            title: "Festivas",
            img: "/aroma-floral.jpg"
        },
        {
            title: "Lorem Ipsum",
            img: "/aroma-quente.jpg"
        },
        {
            title: "Watermelon",
            img: "/fragan-amad.jpg"
        },
    ];

    return (
        <div className="bg-primary px-4 py-8">
            <h1 className='text-2xl text-white font-bold mb-4'>Catálogo</h1>
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                {list.map((item, index) => (
                    <Card key={index} isPressable shadow="sm" radius="sm">
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                shadow="sm"
                                width="100%"
                                radius="none"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between text-primary">
                            <b>{item.title}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}