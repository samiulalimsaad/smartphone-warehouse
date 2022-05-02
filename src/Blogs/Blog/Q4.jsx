import React from "react";

const Q4 = () => {
    return (
        <div className="space-y-4">
            <h2 className="py-4 text-4xl text-center text-teal-700">
                What is the purpose of jwt and how does it work
            </h2>
            <p>
                JSON Web Token is a standard used to create access tokens for an
                application.
            </p>
            <p>
                the server generates a token that certifies the user identity,
                and sends it to the client
            </p>
            <p>
                The client will send the token back to the server for every
                subsequent request, so the server knows the request comes from a
                particular identity.
            </p>
            <p>
                This architecture proves to be very effective in modern Web
                Apps, where after the user is authenticated we perform API
                requests either to a REST or a GraphQL API.
            </p>
            <p>
                A JWT is a Base64URL encoded string, split into three sections,
                delimited by periods.
            </p>
            <p>
                Section one is the header. This section contains JWT metadata;
                typically information about the type of token and the algorithm
                used to sign it. It is encoded JSON.
            </p>
            <p>
                Section two is the payload. This is the content of the token and
                is also encoded JSON.
            </p>
            <p>
                Section three is the signature. This is the hash of the encoded
                header, encoded payload, and a secret. This part of the JWT is
                used to verify the integrity of the message.
            </p>
        </div>
    );
};

export default Q4;
