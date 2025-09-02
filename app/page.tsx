"use client";

import { useEffect, useRef, useState } from "react";
import "./../app/app.css";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Si marcan el checkbox, abre el modal
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) setShowModal(true);
  };

  // Enfocar input cuando abre el modal
  useEffect(() => {
    if (showModal) setTimeout(() => inputRef.current?.focus(), 50);
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
    setIsChecked(false); // al cerrar sin aceptar, se desmarca
    setCode("");
  };

  const handleAccept = () => {
    // Aquí harás la validación/integración real luego
    console.log("Código ingresado:", code);
    setShowModal(false);
    // Mantengo el checkbox marcado como “aceptado”
    setCode("");
  };

  // Pega tu texto aquí (reemplaza TODO el contenido entre las comillas)
  const pastedText = `
Los datos personales que nos comparte como Titular serán tratados por HAPPYCEL S.A. en calidad del responsable. HAPPYCEL S.A. recopilará datos de identificación, económicos y crediticios para las finalidades descritas en la presente autorización.
Por ello, con base en el consentimiento que brinda a través de esta autorización, usted autoriza el tratamiento de sus datos personales para realizar la consulta, almacenamiento y uso de la información correspondiente a la mora en: las bases de la compañía COBRAFACIL S.A.; en las bases de los diferentes burós de crédito, y envío de las cotizaciones correspondientes a las diferentes tiendas de propiedad de o administradas por HAPPYCEL S.A., además.

De igual manera, declara conocer que sus datos personales se conservarán por el tiempo que dure la relación comercial o mientras exista una base legitimadora para el tratamiento. Posterior a los tiempos previamente descritos, HAPPYCEL S.A. podrá anonimizar los datos. En caso de no anonimizarlos, HAPPYCEL S.A. procederá a la eliminación de estos.

HAPPYCEL S.A. adopta las medidas de seguridad necesarias para garantizar la confidencialidad y seguridad de los datos personales. En caso de vulneración de estos se actuará y notificará de acuerdo con lo establecido en la normativa correspondiente.

HAPPYCEL S.A. solamente comparte sus datos personales a terceros con los que esté contractual o legalmente obligado a facilitarlos, así como partes relacionadas en el caso de que sea necesario para la prestación de sus servicios y productos. En este sentido, usted en calidad de titular autoriza expresamente a HAPPYCEL S.A. a transferir su información proporcionada en la presente autorización a las diferentes compañías del grupo, incluyendo, pero no limitándose a ICESA S.A., CREDI&CORP S.A., COBRAFACIL S.A., HAPPYPAY S.A., entre otras. Las compañías previamente mencionadas podrán utilizar los datos para las finalidades mencionadas en la presente autorización.

En su calidad de titular de datos personales, podrá ejercer sus derechos de acceso, eliminación, rectificación y actualización, oposición, suspensión, portabilidad, y, a no ser objeto de una decisión basada única o parcialmente en valoraciones. Usted en calidad de titular podrá revocar el consentimiento dado en cualquier momento en los casos que aplique; sin embargo, HAPPYCEL S.A. se reserva el derecho de cumplir con las finalidades descritas anteriormente siempre y cuando exista otra base legitimadora que permita el tratamiento de sus datos.

El titular de los datos declara que los mismos son verdaderos, el titular será el único responsable en caso de proporcionar datos erróneos o incorrectos.

HAPPYCEL S.A. se reserva el derecho de prestar los servicios y/o continuar con la relación contractual correspondiente en caso de comprobar que los datos son erróneos o incorrectos.

Para ejercer cualquiera de los derechos de protección de datos o realizar una consulta sobre el tratamiento de sus datos, puede realizarlo dirigiendo su solicitud a los siguientes datos de contacto: Av. 6 de diciembre N59-161 y Sta. Lucía, Quito-Ecuador, 099795800 o 0223922607 y servicioalcliente@happy.ec. En caso de no tener respuesta por parte de HAPPYCEL S.A. dentro del término previsto en la normativa aplicable para dar contestación a su solicitud de derechos, usted podrá acudir ante la Autoridad de Protección de Datos Personales.
`;

  return (
    <main className="dpd-container">
      <div className="dpd-card">
        <header className="dpd-header">
          <h1 className="dpd-title">AUTORIZACIÓN DE CONSULTA DE INFORMACION</h1>
          <h2 className="dpd-subtitle">POLÍTICA DE PROTECCIÓN DE DATOS</h2>
        </header>

        <section className="dpd-content">
          <pre className="dpd-text">{pastedText.trim()}</pre>
        </section>

        <footer className="dpd-footer">
          <label className="dpd-check">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="dpd-checkbox"
            />
            <span>He leído y autorizo</span>
          </label>
        </footer>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="dpd-modal-backdrop" role="dialog" aria-modal="true">
          <div className="dpd-modal">
            <button
              aria-label="Cerrar"
              className="dpd-modal-close"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h3 className="dpd-modal-title">Aceptación</h3>
            <p className="dpd-modal-desc">Ingrese el código enviado en el mensaje</p>

            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              value={code}
              onChange={(e) => {
                // Solo números
                const v = e.target.value.replace(/\D+/g, "");
                setCode(v);
              }}
              className="dpd-input"
              placeholder="Código"
            />

            <button
              className="dpd-btn-primary"
              onClick={handleAccept}
              disabled={code.length === 0}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
