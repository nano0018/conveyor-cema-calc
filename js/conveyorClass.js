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

    set materialCode(materialCode) {
        this._materialCode = materialCode;
    }

    get materialCode() {
        return this._materialCode;
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

    // Flow and speed properties
    
    // flowCapacity is calculated by mass flow
    set flowCapacity(flowCapacity) {
        
        this._flowCapacity = flowCapacity;
    }

    get flowCapacity() {
        return this._flowCapacity;
    }

    set conveyorSpeed(conveyorSpeed) {
        this._conveyorSpeed = conveyorSpeed;
    }

    get conveyorSpeed() {
        return this._conveyorSpeed;
    }

    set retentionTime(retentionTime) {
        this._retentionTime = retentionTime;
    }

    get retentionTime() {
        return this._retentionTime;
    }
    
    // Transmission and motor power properties

    set transmissionRelation(transmissionRelation) {
        this._transmissionRelation = transmissionRelation;
    }

    get transmissionRelation() {
        return this._transmissionRelation;
    }    

    set screwFrictionHP(screwFrictionHP) {
        this._screwFrictionHP = screwFrictionHP;
    }

    get screwFrictionHP() {
        return this._screwFrictionHP;
    }

    set screwMaterialHP(screwMaterialHP) {
        this._screwMaterialHP = screwMaterialHP;
    }

    get screwMaterialHP() {
        return this._screwMaterialHP;
    }

    set screwPower(screwPower) {
        this._screwPower = screwPower;
    }

    get screwPower() {
        return this._screwPower;
    }
    //End setters and getters

    // Conveyor calculations

    calcFlowCapacity() {
        const lbToKg =  0.453592;
        this._flowCapacity = (this.massFlow / (this.materialDensity * lbToKg));
    }

    calculateConveyorSpeed(Cf1, Cf2, Cf3, conveyorCapacity) {        
        const equivalentCapacity = this.flowCapacity * Cf1 * Cf2 * Cf3;
        this._conveyorSpeed = equivalentCapacity / conveyorCapacity ;
    }

    calculateRetentionTime() {
        const lengthOnePitch = this.flightPitch * this.screwDiameter;
        const mmToFt = (1 / (25.4 * 12));
        this._retentionTime = ( (this.lengthConveyor / mmToFt) ) / (this.conveyorSpeed * lengthOnePitch);
    }

    calculateRequiredScrewPower(fd, fb, fm, ff, fp) {
        const mmToFt = (1 / (25.4 * 12));
        this._screwFrictionHP = ((this.lengthConveyor * mmToFt) * this.conveyorSpeed * fd * fb) / 1000000;
        this._screwMaterialHP = (this.flowCapacity * (this.lengthConveyor * mmToFt) * this.materialDensity * fm * ff * fp) / 1000000;
    }

    calculateTotalPower(fZero, cin) {
        this._screwPower = ((this.screwFrictionHP + (this.screwMaterialHP * cin)) / 0.88) * fZero;
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
