export default class ScrewConveyor {

    constructor(screwDiameter, lengthConveyor) {
        this.screwDiameter = screwDiameter;
        this.lengthConveyor = lengthConveyor;
    }

    // Start setters and getters
    // Material data properties

    set materialDensity(materialDensity) {
        this._materialDensity = materialDensity;
    }
    
    get materialDensity() {
        return this._materialDensity;
    }

    set massFlow(massFlow) {
        this._massFlow = massFlow;
    }

    get massFlow() {
        return this._massFlow;
    }

    // Conveyor properties

    set screwLoad(screwLoad) {
        this._screwLoad = screwLoad;
    }

    get screwLoad() {
        return this._screwLoad;
    }

    set screwIncl(screwIncl) {
        this._screwIncl = screwIncl;
    }

    get screwIncl() {
        return this._screwIncl;
    }

    set screwBearing(screwBearing) {
        this._screwBearing = screwBearing;
    }

    get screwBearing() {
        return this._screwBearing;
    }

    set screwSupport(screwSupport) {
        this._screwSupport = screwSupport;
    }

    get screwSupport() {
        return this._screwSupport;
    }

    // Screw properties

    set screwPipeSize(screwPipeSize) {
        this._screwPipeSize = screwPipeSize;
    }

    get screwPipeSize() {
        return this._screwPipeSize;
    }

    set flightPitch(flightPitch) {
        this._flightPitch = flightPitch;
    }

    get flightPitch() {
        return this._flightPitch;
    }

    set flightThickness(flightThickness) {
        this._flightThickness = flightThickness;
    }

    get flightThickness() {
        return this._flightThickness
    }

    set paddleQty(paddleQty) {
        this._paddleQty = paddleQty;
    }

    get paddleQty() {
        return this._paddleQty;
    }
    
    set screwBolt(screwBolt) {
        this._screwBolt = screwBolt;
    }

    get screwBolt() {
        return this._screwBolt;
    }

    set screwBoltGrade(screwBoltGrade) {
        this._screwBoltGrade = screwBoltGrade;
    }

    get screwBoltGrade() {
        return this._screwBoltGrade;
    }

    set safetyFactor(safetyFactor) {
        this._safetyFactor =  safetyFactor;
    }
    
    get safetyFactor() {
        return this._safetyFactor;
    }

    // flowCapacity is calculated by mass flow
    
    set flowCapacity(flowCapacity) {
        this._flowCapacity = flowCapacity;
    }

    get flowCapacity() {
        return this._flowCapacity;
    }

    calcFlowCapacity() {
        const lbToKg =  0.453592;
        this._flowCapacity = (this.massFlow / (this.materialDensity * lbToKg));
    }

    set transmissionRelation(transmissionRelation) {
        this._transmissionRelation = transmissionRelation;
    }

    get transmissionRelation() {
        return this._transmissionRelation;
    }

    set conveyorSpeed(conveyorSpeed) {
        this._conveyorSpeed = conveyorSpeed;
    }

    get conveyorSpeed() {
        return this._conveyorSpeed;
    }
    //End setters and getters

    // Conveyor calculations

    calculateConveyorSpeed(Cf1, Cf2, Cf3, conveyorCapacity) {
        
        const equivalentCapacity = this._flowCapacity * Cf1 * Cf2 * Cf3;
        this._conveyorSpeed = equivalentCapacity / conveyorCapacity ;
    }
    

    // Prints conveyor data

    getConveyorInput() {
        const outputString = 
        `
        ****Datos del transportador****

        Díametro del transportador: ${this.screwDiameter} in
        Longitud del transportador: ${this.lengthConveyor} mm
        Densidad del material: ${this.materialDensity} lb/ft3
        Inclinación del transportador: ${this.screwIncl}°
        Rodamiento del transportador: ${this.screwBearing}
        Porcentaje de llenado del transportador: ${this.screwLoad}%
        El transportador tiene soporte al final?: ${this.screwSupport}
        Tamaño eje del transportador: ${this.screwPipeSize}
        Espesor de las hélices del transportador: ${this.flightThickness} in
        Paso de las hélices del transportador: ${this.flightPitch}
        Tipo de hélices del transportador: ${this.flightType}
        Número de paletas barredoras del transportador: ${this.paddleQty}
        Tamaño tornillos del espigo: ${this.screwBolt} in
        Grado tornillos del espigo: ${this.screwBoltGrade}
        Factor de seguridad requerido: ${this.safetyFactor}
        Flujo volumétrico requerido: ${this.flowCapacity} ft3/h
        Relación de transmisión: ${this.transmissionRelation}

        ******************************`
        console.log(outputString);
    }
};
