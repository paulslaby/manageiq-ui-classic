class EmsClusterDecorator < MiqDecorator
  def self.fonticon
    'pficon pficon-cluster'
  end

  def self.fileicon
    '100/ems_cluster.png'
  end

  def single_quad
    {
      :fonticon => fonticon
    }
  end
end
