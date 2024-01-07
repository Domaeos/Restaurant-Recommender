import { restaurants, IRestaurant } from './restaurants';

const dollarSigns: string = '$$';
const deliveryTimeMax: number = 90;
const maxDistance: number = 5;
let result: string;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants: IRestaurant[] = restaurants.filter((restaurant: IRestaurant) => {
    if (restaurant.priceBracket.length > priceBracket) {
        return false;
    }

    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }

    if (restaurant.distance > maxDistance) {
        return false;
    }

    return restaurant;
});

if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
} else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
