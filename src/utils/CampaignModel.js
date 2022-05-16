class CampaignModel {
  constructor(data) {
    this.id = data.campaign_id;
    this.name = data.name;
    this.avg_spend = data.average_ad_spend;
    this.avg_rev = data.average_ad_revenue;
    this.type = data.ad_type;
    this.marketplace = data.marketplace;
  }
}

export default CampaignModel;