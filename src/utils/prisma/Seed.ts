import SeedCurrencies from './SeedCurrencies';
import SeedProductRange from './SeedProductRange';
import SeedCategory from './SeedCategory';
import SeedMainCategory from './SeedMainCategory';
import SeedSubCategory from './SeedSubCategory';
import SeedBrandCategory from './SeedBrandCategory';
import SeedVariant from './SeedVariant';
import SeedProduct from './SeedProduct';

export default async function Seed() {
    await SeedCurrencies();
    await SeedProductRange();
    await SeedCategory();
    await SeedMainCategory();
    await SeedSubCategory();
    await SeedBrandCategory();
    await SeedVariant();
    await SeedProduct();
}
