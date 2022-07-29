export const finalSum = 'finalSum';

export default function (state, action) {
    switch (action.type) {
        default: throw new Error(`Некорректныцй код типа действия: ${action.type}`);
        case finalSum:
            return action.orderSum;
    }
}