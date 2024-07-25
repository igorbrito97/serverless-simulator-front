export interface SimulationResultsModel {
    coldInstancesCount: number;
    warmInstancesCount: number;
    requestsCount: number;
    rejectedCount: number;
    coldProbability: number;
    rejectionProbability: number;
    warmProbability: number;
    averageInstanceLifespan: number;
    averageServerCount: number;
    averageRunningServers: number;
    averageIdleCount: number;
}