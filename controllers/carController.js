let cars = [
  {
    id: 1,
    marka: "BMW",
    model: "F30",
    yusus: "180000",
    elaqeNomresi: "0501112233",
    masininSekli: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    tesvir: "Ideal vəziyyətdədir",
    yancaq: "Benzin",
    masininIli: "2020",
    masininSahibi: "Zabbarov16"
  },
  {
    id: 2,
    marka: "Mercedes",
    model: "C200",
    yusus: "95000",
    elaqeNomresi: "0504445566",
    masininSekli: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    tesvir: "Problemsiz maşındır",
    yancaq: "Dizel",
    masininIli: "2021",
    masininSahibi: "Zabbarov16"
  }
];

const getCars = (req, res) => {
    res.json(cars);
};
const addCar = (req, res) => {

    const newCar = {
        id: cars.length > 0 ? cars[cars.length - 1].id + 1 : 1,
        ...req.body
    };

    cars.push(newCar);

    res.status(201).json({
        success: true,
        message: "Car added successfully!",
        car: newCar
    });

};
const deleteCar = (req, res) => {

    const id = Number(req.params.id);

    cars = cars.filter(car => car.id !== id);

    res.json({
        success: true,
        message: "Car deleted successfully!"
    });

};

const editCar = (req, res) => {

    const id = Number(req.params.id);

    const updatedCar = req.body;

    const index = cars.findIndex(car => car.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Car not found"
        });
    }

    cars[index] = {
        ...cars[index],
        ...updatedCar
    };

    res.json({
        success: true,
        message: "Car updated successfully!",
        car: cars[index]
    });

};

module.exports = {
    getCars,
    addCar,
    deleteCar,
     editCar
};