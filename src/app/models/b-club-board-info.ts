export class BClubBoardInfo {

    public boardActStartDate: string;
    public boardActEndDate: string;
    public boardActStartTime: string;
    public boardActEndTime: string;

    public boardActType: string = 'WEEKLY';
    public boardActCourt: string;

    public boardBudgetBalance: number;
    public boardBudgetTotal: number;
    public boardBudgetPrivate: number;
    public boardPrivateTotal: number;
    
    public boardClubAnnouncement: string;
    
    constructor() {

    }
}