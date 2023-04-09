"use strict";

const measurementCreateDtoInType = shape({
    // timestamp: uu5String(24).isRequired(),
    // temperature: number().isRequired(),
    // humidity: number().isRequired(),
    // frequency: oneOf(["oneMinute","fiveMinutes", "hour", "day", "month"]).isRequired(),
    // gatewayId: id().isRequired()
    timestamp: uu5String(24),
    temperature: number(),
    humidity: number(),
    frequency: oneOf(["oneMinute","fiveMinutes", "hour", "day", "month"]),
    gatewayId: id()
});