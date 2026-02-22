# Calculadora de Carga Animal

Esta herramienta te ayudará a estimar la carga animal óptima para tu potrero, un factor clave para la sostenibilidad y productividad de tu finca en el Cesar.

## 📝 Conceptos Clave

* **Unidad Gran Ganado (UGG):** Equivalente a 450 kg de peso vivo. Un animal de 200 kg es 0.44 UGG.
* **Capacidad de Carga:** Número de UGG que un potrero puede soportar de manera sostenible.

---

<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
    <h3 style="color: #2e7d32; text-align: center; margin-bottom: 20px;">Estima la Carga de tu Potrero</h3>

    <div style="margin-bottom: 15px;">
        <label for="area" style="display: block; margin-bottom: 5px; font-weight: bold;">Área del Potrero (hectáreas):</label>
        <input type="number" id="area" value="1" min="0.1" step="0.1" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
    </div>

    <div style="margin-bottom: 15px;">
        <label for="forraje" style="display: block; margin-bottom: 5px; font-weight: bold;">Disponibilidad de Forraje (kg MS/ha/año):</label>
        <input type="number" id="forraje" value="8000" min="1000" step="100" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        <small style="color: #666;">*Kilos de Materia Seca por hectárea por año.</small>
    </div>

    <div style="margin-bottom: 15px;">
        <label for="consumo" style="display: block; margin-bottom: 5px; font-weight: bold;">Consumo Promedio por UGG (kg MS/UGG/día):</label>
        <input type="number" id="consumo" value="12" min="5" step="0.5" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
        <small style="color: #666;">*Kilos de Materia Seca por Unidad Gran Ganado por día.</small>
    </div>

    <button onclick="calcularCarga()" style="width: 100%; padding: 10px 15px; background-color: #2e7d32; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 10px;">Calcular Carga Animal</button>

    <div style="margin-top: 20px; padding: 10px; background-color: #e8f5e9; border: 1px solid #a5d6a7; border-radius: 4px;">
        <p style="margin: 0; font-weight: bold;">Carga Animal Estimada:</p>
        <p id="resultadoCarga" style="font-size: 20px; color: #1b5e20; font-weight: bold;">0 UGG</p>
        <small style="color: #666;">*Unidades Gran Ganado (450 kg).</small>
    </div>
</div>

<script>
    function calcularCarga() {
        const area = parseFloat(document.getElementById('area').value);
        const forraje = parseFloat(document.getElementById('forraje').value);
        const consumo = parseFloat(document.getElementById('consumo').value);

        if (isNaN(area) || isNaN(forraje) || isNaN(consumo) || area <= 0 || forraje <= 0 || consumo <= 0) {
            document.getElementById('resultadoCarga').innerText = "Ingrese valores válidos";
            return;
        }

        // Conversión de forraje anual a diario y ajuste por eficiencia de uso (ej. 50-60%)
        const forrajeDisponibleDiario = (forraje * area * 0.55) / 365; // Usamos 55% de eficiencia de pastoreo

        const cargaAnimal = forrajeDisponibleDiario / consumo;

        document.getElementById('resultadoCarga').innerText = `${cargaAnimal.toFixed(2)} UGG`;
    }
    // Calcular al cargar para mostrar un valor inicial
    document.addEventListener('DOMContentLoaded', calcularCarga);
</script>
