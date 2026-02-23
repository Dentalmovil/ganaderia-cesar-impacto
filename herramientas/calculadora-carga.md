# Calculadora de Carga Animal

Esta herramienta te ayudará a estimar la carga animal óptima para tu potrero, un factor clave para la sostenibilidad y productividad de tu finca en el Cesar.

## 📝 Conceptos Clave

* **Unidad Gran Ganado (UGG):** Equivalente a 450 kg de peso vivo. Un animal de 200 kg es 0.44 UGG.
* **Capacidad de Carga:** Número de UGG que un potrero puede soportar de manera sostenible.

---

# Calculadora de Carga Animal

Estima la capacidad de tu potrero rápidamente.

<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #2e7d32; border-radius: 8px; background-color: #f9f9f9; font-family: sans-serif;">
    <h3 style="color: #2e7d32; text-align: center;">Estima la Carga de tu Potrero</h3>

    <label style="display:block; margin-top:10px;">Área (Hectáreas):</label>
    <input type="number" id="area" value="1" style="width:100%; padding:8px; margin-top:5px; border:1px solid #ccc; border-radius:4px;">

    <label style="display:block; margin-top:10px;">Forraje (kg MS/ha/año):</label>
    <input type="number" id="forraje" value="8000" style="width:100%; padding:8px; margin-top:5px; border:1px solid #ccc; border-radius:4px;">

    <label style="display:block; margin-top:10px;">Consumo (kg MS/animal/día):</label>
    <input type="number" id="consumo" value="12" style="width:100%; padding:8px; margin-top:5px; border:1px solid #ccc; border-radius:4px;">

    <button onclick="ejecutarCalculo()" style="width:100%; background:#2e7d32; color:white; padding:12px; border:none; border-radius:4px; margin-top:20px; cursor:pointer; font-weight:bold;">Calcular Ahora</button>

    <div style="margin-top:20px; padding:15px; background:#e8f5e9; border-radius:4px; text-align:center;">
        <span style="display:block; font-weight:bold; color:#1b5e20;">Resultado:</span>
        <span id="resultadoCarga" style="font-size:24px; font-weight:bold; color:#2e7d32;">-- UGG</span>
    </div>
</div>

<script>
  function ejecutarCalculo() {
    const a = parseFloat(document.getElementById('area').value);
    const f = parseFloat(document.getElementById('forraje').value);
    const c = parseFloat(document.getElementById('consumo').value);
    
    if(a > 0 && f > 0 && c > 0) {
      const res = ((f * a * 0.55) / 365) / c;
      document.getElementById('resultadoCarga').innerText = res.toFixed(2) + " UGG";
    } else {
      alert("Por favor ingresa valores mayores a cero");
    }
  }
</script>
