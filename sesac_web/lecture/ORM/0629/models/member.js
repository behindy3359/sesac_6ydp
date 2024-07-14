module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    member_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nick: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    paranoid: true,
    tableName: 'MEMBER',
    hooks: {
      beforeDestroy: async (member, options) => {
        await member.deactivate();
      }
    }
  });

  Member.associate = (models) => {
    // 예시: Review 모델과의 관계 설정
    Member.hasMany(models.Review, {
      foreignKey: 'member_id',
      sourceKey: 'member_id'
    });
    // 다른 모델과의 관계도 여기에 추가할 수 있습니다.
  };

  Member.prototype.deactivate = async function() {
    await this.update({ is_actived: false });
    // 관련된 리뷰들도 비활성화하는 로직을 추가할 수 있습니다.
    const reviews = await this.getReviews();
    await Promise.all(reviews.map(review => review.update({ is_active: false })));
  };

  return Member;
};