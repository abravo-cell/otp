"use client";

export default function ValidacionExitosa() {
  return (
    <main className="dpd-container">
      <div className="dpd-card text-center">
        <header className="dpd-header">
          <h1 className="dpd-title">VALIDACIÓN EXITOSA</h1>
        </header>

        <figure className="dpd-figure">
          <img
            src="https://imagenescn.s3.us-east-2.amazonaws.com/happy.png"
            alt="Validación exitosa"
            className="dpd-image mx-auto"
            loading="lazy"
            width={500}
          />
        </figure>

        <section className="dpd-content">
          <p className="text-lg font-semibold mt-4">
            Su código OTP ha sido validado exitosamente.<br />
            Por favor continúe el proceso en <strong>CreditNew</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
