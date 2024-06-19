import * as React from "react";

const PythonIcon = (props) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <defs>
        <linearGradient
            id="a"
            x1={-133.268}
            y1={-202.91}
            x2={-133.198}
            y2={-202.84}
            gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset={0} stopColor="#387eb8" />
            <stop offset={1} stopColor="#366994" />
        </linearGradient>
        <linearGradient
            id="b"
            x1={-133.575}
            y1={-203.203}
            x2={-133.495}
            y2={-203.133}
            gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset={0} stopColor="#ffe052" />
            <stop offset={1} stopColor="#ffc331" />
        </linearGradient>
        </defs>
        <title>{"file_type_python"}</title>
        <path
        d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z"
        style={{
            fill: "url(#a)",
        }}
        />
        <path
        d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z"
        style={{
            fill: "url(#b)",
        }}
        />
    </svg>
);
export default PythonIcon;