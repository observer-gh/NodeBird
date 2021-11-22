import { useState, useCallback } from 'react';

/* not sure about type...
only accept string for now */
export default (initValue:string) => {
    /* unpack value and state setter from useState */
    const [value, setter] = useState<string>(initValue);
    /*  not sure about concept of callback yet */
    /* what should type of e be?? */
    const handler = useCallback( (e) => {
        setter(e.target.value);
    }, []);
    return [value, handler];
}