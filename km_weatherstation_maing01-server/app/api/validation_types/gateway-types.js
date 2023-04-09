"use strict";

const gatewayCreateDtoInType = shape({
    name: uu5String(255).isRequired(),
    description: uu5String(255).isRequired(),
    uuIdentity: uu5String(24).isRequired(), 
    state: oneOf(["active", "unactive", "toBeRegistered"]).isRequired(),
    timestamp: uu5String(24).isRequired(),
    actualTemperature: number().isRequired(),
    actualHumidity: number().isRequired(),
    startTimestamp: uu5String(24).isRequired(),
    finishTimestamp: uu5String(24).isRequired(),
    location:  shape({
        city: uu5String(100),
        street: uu5String(255)
    }).isRequired()
});