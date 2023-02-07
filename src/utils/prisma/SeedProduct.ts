import { prisma } from '../../server/db';

export default async function SeedProduct() {
    const product = await prisma.product.create({
        data: {
            name: 'Razer Basilisk Ultimate',
            brandName: 'Razer',
            price: 124.99,
            stockCount: 6,
            color: 'Black',
            availability: 'inStock',
            description:
                "Always play games with a full battery with the Razer Basilisk Ultimate Wireless Gaming Mouse with Charging Station. When you're not gaming, you can place the gaming mouse on the charging station to charge the mouse.Game wirelessly and without any noticeable lag with the Razer Basilisk Ultimate Gaming Mouse.Aim with the utmost precision thanks to the Razer Focus+ optical sensor with a maximum DPI of 20, 000.You can adjust the sensitivity of the cursor with the Razer Chroma software.With this software, you can also assign handy functions for in -game actions to the 6 programmable buttons.The mouse has mechanical switches that are guaranteed to register every click.You can choose if you want to connect the mouse via Bluetooth or via the included USB receiver.This way, you can game wirelessly at every LAN party.",
            details:
                'Speed ​​and convenience for optimal gaming performance The Razer Basilisk Ultimate & Dock Mouse is designed for perfect gaming. This mouse has 11 programmable buttons and is super fast with its 20000dpi, so you can respond optimally to, for example, your enemy in an FPS game.  Design With the ergonomic design you prevent RSI complaints and pain in your wrist or arm is a thing of the past. In addition, the mouse has no less than 14 Razer Chroma lighting zones that give your mouse a unique look and feel.',
            highlights: [
                "Place the mouse on the included charging dock to charge the Basilisk when you're not gaming.",
                'Connect this mouse wirelessly via the included USB receiver or Bluetooth 4.0 to game wirelessly on any PC.',
                'You can aim very accurately in games with the Razer Focus+ optical sensor with a maximum speed of 20,000DPI.',
            ],
            starCount: 4,
            reviewCount: 70,
            currencySymbol: 'euro',
            image: 'https://m.media-amazon.com/images/I/71ST2C9315L._AC_SL1500_.jpg',
            additionalImages: [
                'https://m.media-amazon.com/images/I/71JYwDjdEBL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71TAqe4sSJL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/713rDySpfBL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/616V1pb5NpL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/719o7FiXheL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71ST2C9315L._AC_SL1500_.jpg',
            ],
        },
    });

    console.log(product);
}
